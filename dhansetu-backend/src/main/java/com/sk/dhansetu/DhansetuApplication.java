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
	@Bean
	public CommandLineRunner loadData(UserRepository userRepo) {
		return args -> {
			userRepo.save(new User(null, "cust1", "pass123", "CUSTOMER"));
			userRepo.save(new User(null, "rm1", "pass123", "RM"));
		};
	}

}
