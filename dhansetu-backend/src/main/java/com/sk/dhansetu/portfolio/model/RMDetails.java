package com.sk.dhansetu.portfolio.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "rm_details")
public class RMDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rmid;

    private String rmname;
    @JsonIgnore
    @OneToMany(mappedBy = "rm", cascade = CascadeType.ALL)
    private List<RMPortfolio> portfolios;

}
