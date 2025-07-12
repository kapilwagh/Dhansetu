package com.sk.dhansetu.portfolio.controller;


import com.sk.dhansetu.portfolio.dto.RmPortfolioResponse;
import com.sk.dhansetu.portfolio.dto.RmPortfolioResponseList;
import com.sk.dhansetu.portfolio.model.CustomerHolding;
import com.sk.dhansetu.portfolio.model.RMPortfolio;
import com.sk.dhansetu.portfolio.service.RmPortfolioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/rm/portfolio")
public class RmPortfolioController {

    private final RmPortfolioService rmPortfolioService;

    public RmPortfolioController(RmPortfolioService rmPortfolioService) {
        this.rmPortfolioService = rmPortfolioService;
    }

//    @GetMapping("/v2/{rmId}")
//    public ResponseEntity<RMPortfolio> getRmDetailsByIdController(@PathVariable Long rmId) {
//        return new ResponseEntity<>(rmPortfolioService.getRmDetailsByIdService(rmId), HttpStatus.OK);
//    }

    @GetMapping("/v2/{rmId}")
    public ResponseEntity<RmPortfolioResponse> getRmDetailsByCustIdController(@PathVariable Long rmId) {
        return new ResponseEntity<>(rmPortfolioService.getRmDetailsByCustIdService(rmId), HttpStatus.OK);
    }

    @GetMapping("/{rmId}")
    public List<RmPortfolioResponseList> getCustDetailsByRmIdController(@PathVariable Long rmId) {
        return new ResponseEntity<>(rmPortfolioService.getCustDetailsByRmIdService(rmId), HttpStatus.OK).getBody();
    }


}
