package com.sk.dhansetu.portfolio.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@Builder
@NoArgsConstructor@AllArgsConstructor
public class StockHolding {
    private long customerId;
    private String scripName;
    private String sector;
    private long ltp;
    private long qty;
    private long avgBuyPrice;
    private long healthScore;
}
