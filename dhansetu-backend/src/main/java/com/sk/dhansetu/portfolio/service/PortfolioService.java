package com.sk.dhansetu.portfolio.service;

import com.sk.dhansetu.portfolio.model.CustomerHolding;
import com.sk.dhansetu.portfolio.model.StockHolding;
import com.sk.dhansetu.portfolio.repository.CustomerHoldingRepoImpl;
import com.sk.dhansetu.portfolio.repository.CustomerHoldingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Service
public class PortfolioService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final CustomerHoldingRepoImpl customerHoldingRepository;

    public PortfolioService(CustomerHoldingRepoImpl customerHoldingRepo) {
        this.customerHoldingRepository = customerHoldingRepo;
    }

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

    public List<CustomerHolding> getCustHoldingsService(Long customerId) {
      return customerHoldingRepository.findByCustomerIdRepo(customerId);
    }
}
