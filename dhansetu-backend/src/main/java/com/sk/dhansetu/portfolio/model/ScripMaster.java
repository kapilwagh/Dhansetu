package com.sk.dhansetu.portfolio.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScripMaster {
    private String scripName;
    private String isin;
    private String sector;
    private long ltp;
}
