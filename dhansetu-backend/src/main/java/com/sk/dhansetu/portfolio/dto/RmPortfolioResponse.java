package com.sk.dhansetu.portfolio.dto;

import jakarta.persistence.Column;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RmPortfolioResponse {

   private List<RmPortfolioResponseList> rmPortfolioResponse;
}
