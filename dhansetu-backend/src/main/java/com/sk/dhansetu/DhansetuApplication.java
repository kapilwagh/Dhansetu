package com.sk.dhansetu;

import com.sk.dhansetu.auth.model.User;
import com.sk.dhansetu.auth.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DhansetuApplication {

	public static void main(String[] args) {
		SpringApplication.run(DhansetuApplication.class, args);
	}


}
