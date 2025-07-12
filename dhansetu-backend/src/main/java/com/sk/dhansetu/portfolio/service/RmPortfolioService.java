package com.sk.dhansetu.portfolio.service;

import com.sk.dhansetu.portfolio.dto.RmPortfolioResponse;
import com.sk.dhansetu.portfolio.dto.RmPortfolioResponseList;
import com.sk.dhansetu.portfolio.model.CustomerHolding;
import com.sk.dhansetu.portfolio.model.RMPortfolio;
import com.sk.dhansetu.portfolio.repository.CustomerHoldingRepository;
import com.sk.dhansetu.portfolio.repository.RMPortfolioRepository;
import com.sk.dhansetu.portfolio.repository.RMPortfolioRepositoryImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class RmPortfolioService {

   @Autowired
    private RMPortfolioRepository rmPortfolioRepository;

   @Autowired
   private CustomerHoldingRepository customerHoldingRepository;


//    public RmPortfolioService(RmPortfolioRepository rmRepository) {
//        this.rmRepository = rmRepository;
//    }

//    public RMPortfolio getRmDetailsByIdService(Long rmId) {
//        return rmRepository.findByRmid(rmId); // or findById(rmId).orElseThrow(...)
//    }

    public RmPortfolioResponse getRmDetailsByCustIdService(Long rmId) {
        RMPortfolio rmPortfolio = null;

        //double asDouble = rmPortfolio.getHoldings().stream().mapToLong(t -> t.getHealthScore()).average().getAsDouble().orElse(0.0);
        double avg = rmPortfolio.getHoldings()
                .stream()
                .mapToLong(CustomerHolding::getHealthScore)
                .average()
                .orElse(0.0);

        BigDecimal rounded = BigDecimal.valueOf(avg).setScale(2, RoundingMode.HALF_UP);
        //System.out.println("Average Health Score: " + rounded);

        long totalAmount = rmPortfolio.getHoldings()
                .stream()
                .mapToLong(h -> h.getAvgBuyPrice() * h.getQty())
                .sum();

        return RmPortfolioResponse.builder()
//                .rmid(rmPortfolio.getRm().getRmid())
//                .custId(rmPortfolio.getCustId())
//                .custName(rmPortfolio.getCustName())
//                .investedAmt(totalAmount)
//                .healthScore(rounded.doubleValue())
//                .pending(rmPortfolio.getPending())
                .build();

    }

    public List<RmPortfolioResponseList> getCustDetailsByRmIdService(Long rmId) {
        List<RMPortfolio> rMPortfolioList = rmPortfolioRepository.findByRm_Rmid(rmId);
        List<RmPortfolioResponseList> mPortfolioResponseList=new ArrayList<>();
        for(RMPortfolio re: rMPortfolioList){

            List<CustomerHolding> byCustomerId = customerHoldingRepository.findByCustomerId(re.getCustid());
            double asDouble = byCustomerId.stream().mapToLong(t -> t.getHealthScore()).average().getAsDouble();
//            double asDouble1 = byCustomerId.stream().mapToLong(t -> t.get()).average().getAsDouble();

            RmPortfolioResponseList build = RmPortfolioResponseList.builder().custId(re.getCustid())
                    .custName(re.getCustname()).pending(re.isPending()).healthScore(asDouble).build();
            mPortfolioResponseList.add(build);
        }
       return mPortfolioResponseList;
    }
}


