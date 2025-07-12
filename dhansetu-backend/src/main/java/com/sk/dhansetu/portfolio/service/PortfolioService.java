package com.sk.dhansetu.portfolio.service;

import com.sk.dhansetu.portfolio.dto.CustomerPortfolioResponse;
import com.sk.dhansetu.portfolio.dto.PortfolioAnalysisResponse;
import com.sk.dhansetu.portfolio.model.CustomerHolding;
import com.sk.dhansetu.portfolio.model.StockData;
import com.sk.dhansetu.portfolio.model.StockHolding;
import com.sk.dhansetu.portfolio.repository.CustomerHoldingRepository;
import com.sk.dhansetu.portfolio.repository.StockDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

@Service
public class PortfolioService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

//    private final CustomerHoldingRepoImpl customerHoldingRepository;
//
//    public PortfolioService(CustomerHoldingRepoImpl customerHoldingRepo) {
//        this.customerHoldingRepository = customerHoldingRepo;
//    }

    @Autowired
    private CustomerHoldingRepository customerHoldingRepository;

    @Autowired
    private StockDataRepository stockDataRepository;

    public List<StockHolding> getCustHoldings(long customerId) {
        String sql = "SELECT * FROM customer_holdings where customer_id = "+customerId;

        return jdbcTemplate.query(sql, new RowMapper<StockHolding>() {
            @Override
            public StockHolding mapRow(ResultSet rs, int rowNum) throws SQLException {
                StockHolding stockHolding = new StockHolding();
                stockHolding.setCustomerId(rs.getLong("customer_id"));
                stockHolding.setScripName(rs.getString("scrip_name"));
                stockHolding.setSector(rs.getString("sector"));
                stockHolding.setQty(rs.getLong("qty"));
                stockHolding.setAvgBuyPrice(rs.getLong("avg_buy_price"));
                stockHolding.setLtp(rs.getLong("ltp"));
                stockHolding.setHealthScore(rs.getLong("health_score"));
                return stockHolding;
            }
        });
    }

    public List<CustomerPortfolioResponse> getCustHoldingsService(Long customerId) {

        List<CustomerPortfolioResponse> customerPortfolioResponseList=new ArrayList<>();
        for (CustomerHolding customerHolding : customerHoldingRepository.findByCustomerId(customerId)) {
            customerPortfolioResponseList.add(CustomerPortfolioResponse.builder().scripName(customerHolding.getScripName()).
                    sector(customerHolding.getSector()).ltp(customerHolding.getLtp())
                    .qty(customerHolding.getQty()).avgBuyPrice(customerHolding.getAvgBuyPrice()).
                    healthScore(customerHolding.getHealthScore()).build());
        }


        return customerPortfolioResponseList;
//      return null;
    }

    public List<PortfolioAnalysisResponse>  getCustHoldingsDetailsService(Long customerId) {
        List<PortfolioAnalysisResponse> portfolioAnalysisResponses=new ArrayList<>();
        for (CustomerHolding customerHolding : customerHoldingRepository.findByCustomerId(customerId)) {
            StockData stockData= stockDataRepository.findBySripName(customerHolding.getScripName());

            if(stockData==null || stockData.getStatus().equals("Reduce")){
                String status = stockData==null ? "NA" : stockData.getStatus();

                List<StockData> stockDataList=stockDataRepository.findBySectorName(customerHolding.getSector());

                double maxPotentialPl = Optional.ofNullable(stockDataList)
                        .orElse(Collections.emptyList())
                        .stream()
                        .mapToDouble(t -> Double.parseDouble(t.getPotentialPL()))
                        .max()
                        .orElse(0.0);

                Optional<String> first = stockDataList.stream().filter(t -> Double.valueOf(t.getPotentialPL()) == maxPotentialPl).map(StockData::getSripName).findFirst();

                PortfolioAnalysisResponse at = PortfolioAnalysisResponse.builder().action(status).recoStock(first.get()).
                        scripName(customerHolding.getScripName()).qty(customerHolding.getQty()).build();
                portfolioAnalysisResponses.add(at);
            }else {
                PortfolioAnalysisResponse at = PortfolioAnalysisResponse.builder().action(stockData.getStatus()).
                        scripName(customerHolding.getScripName()).qty(customerHolding.getQty()).build();
                portfolioAnalysisResponses.add(at);
            }
        }

        return portfolioAnalysisResponses;
    }
}
