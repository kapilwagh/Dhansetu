package com.sk.dhansetu.portfolio.repository;

import com.sk.dhansetu.portfolio.model.CustomerHolding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerHoldingRepository extends JpaRepository<CustomerHolding,Long> {
    List<CustomerHolding> findByPortfolio_Custid(Long custid);

    // Alternative with explicit query
    @Query("SELECT ch FROM CustomerHolding ch WHERE ch.portfolio.custid = :custid")
    List<CustomerHolding> findByCustomerId(@Param("custid") Long custid);
}
