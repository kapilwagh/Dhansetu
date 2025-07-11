package com.sk.dhansetu.portfolio.repository;

import com.sk.dhansetu.portfolio.model.CustomerHolding;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CustomerHoldingRepoImpl {

    @Autowired
    private CustomerHoldingRepository customerHoldingRepository;


    public List<CustomerHolding> findByCustomerIdRepo(Long customerId) {
        return customerHoldingRepository.findByCustomerId(customerId);
    }






}
