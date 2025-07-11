package com.sk.dhansetu.portfolio.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RmPortfolioResponseList {
//    private Long rmid;
    private Long custId;
    private String custName;
//    private Long investedAmt;
    private Double healthScore;
    private Boolean pending;
}
