package com.sk.dhansetu.portfolio.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Column;
import jakarta.persistence.Table;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@IdClass(CustomerHoldingId.class)
@Table(name = "customer_holdings")
public class CustomerHolding {

    @Id
    @Column(name = "customer_id")
    private Long customerId;

    @Id
    @Column(name = "scrip_name")
    private String scripName;

    @Column(name = "sector")
    private String sector;

    @Column(name = "ltp")
    private Long ltp;

    @Column(name = "qty")
    private Long qty;

    @Column(name = "avg_buy_price")
    private Long avgBuyPrice;

    @Column(name = "health_score")
    private Long healthScore;

}
