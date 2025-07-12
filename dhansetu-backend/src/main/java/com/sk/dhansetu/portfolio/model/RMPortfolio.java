package com.sk.dhansetu.portfolio.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;


@ToString
@Getter
@Setter
@Entity
@Table(name = "rm_portfolio")
public class RMPortfolio {

    @Id
    private Long custid;

    @ManyToOne
    @JoinColumn(name = "rmid", referencedColumnName = "rmid")
    private RMDetails rm;

    private String custname;
    private boolean pending;

    @JsonIgnore
    @OneToMany(mappedBy = "portfolio", cascade = CascadeType.ALL)
    private List<CustomerHolding> holdings;
}