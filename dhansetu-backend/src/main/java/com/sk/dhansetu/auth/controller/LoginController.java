package com.sk.dhansetu.auth.controller;

import com.sk.dhansetu.auth.model.User;
import com.sk.dhansetu.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping
    public RedirectView login(@RequestParam String username, @RequestParam String password) {
        User user = userService.authenticate(username, password);
        if (user != null) {
            if ("CUSTOMER".equalsIgnoreCase(user.getRole())) {
                return new RedirectView("/customer/dashboard");
            } else if ("RM".equalsIgnoreCase(user.getRole())) {
                return new RedirectView("/rm/dashboard");
            }
        }
        return new RedirectView("/login?error=true");
    }

    @GetMapping
    public String showLoginPage() {
        return "login";
    }
}
