package com.sk.dhansetu.auth.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class DashboardController {

    @GetMapping("/customer/dashboard")
    public String customerDashboard() {
        return "customer_dashboard";
    }

    @GetMapping("/rm/dashboard")
    public String rmDashboard() {
        return "rm_dashboard";
    }
}
