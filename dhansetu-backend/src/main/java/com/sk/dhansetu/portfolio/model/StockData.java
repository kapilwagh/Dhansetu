package com.sk.dhansetu.portfolio.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "stock_data")
public class StockData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "sripname")
    private String sripName;

    @Column(name = "sectorname")
    private String sectorName;

    @Column(name = "status")
    private String status;

    @Column(name = "ltp", precision = 10, scale = 2)
    private BigDecimal ltp;

    @Column(name = "diff", precision = 10, scale = 2)
    private BigDecimal diff;

    @Column(name = "chg", precision = 10, scale = 2)
    private BigDecimal chg;

    @Column(name = "recoprice")
    private BigDecimal recoPrice;

    @Column(name = "target", precision = 10, scale = 2)
    private BigDecimal target;

    @Column(name = "potentialPL")
    private String potentialPL;

    @Column(name = "pl_date1")
    private LocalDate plDate1;

    @Column(name = "pl_date2")
    private LocalDate plDate2;
}