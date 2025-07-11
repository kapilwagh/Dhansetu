package com.sk.dhansetu.portfolio.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PortfolioAnalysisResponse {

    private String scripName;
    private Long qty;
    private String action;
    private String recoStock;
}
