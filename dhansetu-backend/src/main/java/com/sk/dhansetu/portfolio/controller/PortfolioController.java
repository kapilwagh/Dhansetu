package com.sk.dhansetu.portfolio.controller;

import com.sk.dhansetu.portfolio.model.CustomerHolding;
import com.sk.dhansetu.portfolio.model.StockHolding;
import com.sk.dhansetu.portfolio.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/portfolio")
public class PortfolioController {

    @Autowired private PortfolioService portfolioService;

    @GetMapping("/v2/{customerId}/holdings")
    public ResponseEntity<List<StockHolding>> getCustomerHoldings(@PathVariable Long customerId) {
        List<StockHolding> response = portfolioService.getCustHoldings(customerId);
        return response.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(response);
    }


    @GetMapping("/{customerId}/holdings")
    public ResponseEntity<List<CustomerHolding>> getCustomerHoldingsController(@PathVariable Long customerId) {
        return new ResponseEntity<>(portfolioService.getCustHoldingsService(customerId), HttpStatus.OK);
    }

}
