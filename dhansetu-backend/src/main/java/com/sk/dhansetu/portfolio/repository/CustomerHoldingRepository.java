package com.sk.dhansetu.portfolio.repository;

import com.sk.dhansetu.portfolio.model.CustomerHolding;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CustomerHoldingRepository extends JpaRepository<CustomerHolding, Integer> {

    // Custom query method to fetch all holdings by customer ID
    List<CustomerHolding> findByCustomerId(Long customerId);
}

