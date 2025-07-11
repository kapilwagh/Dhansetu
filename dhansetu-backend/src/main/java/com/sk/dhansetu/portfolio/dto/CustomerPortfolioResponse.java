package com.sk.dhansetu.portfolio.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CustomerPortfolioResponse {

    private String scripName;
    private String sector;
    private Long ltp;
    private Long qty;
    private Long avgBuyPrice;
    private Long healthScore;
}
