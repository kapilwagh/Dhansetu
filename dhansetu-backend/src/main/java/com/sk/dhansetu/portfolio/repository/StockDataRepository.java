package com.sk.dhansetu.portfolio.repository;

import com.sk.dhansetu.portfolio.model.CustomerHolding;
import com.sk.dhansetu.portfolio.model.StockData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StockDataRepository extends JpaRepository<StockData, Long> {
    StockData findBySripName(String sripName);

    List<StockData> findBySectorName(String sector);

//    List<CustomerHolding> findBySectorName(String sectorName);
}