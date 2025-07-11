package com.sk.dhansetu.portfolio.repository;

import com.sk.dhansetu.portfolio.model.RMDetails;
import com.sk.dhansetu.portfolio.model.RMPortfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RMPortfolioRepository extends JpaRepository<RMPortfolio, Long> {

    // Correct way to find portfolios by RM's ID
    List<RMPortfolio> findByRm_Rmid(Long rmid);

    // Alternative with explicit JPQL
    @Query("SELECT rp FROM RMPortfolio rp WHERE rp.rm.rmid = :rmid")
    List<RMPortfolio> findByRmid(@Param("rmid") Long rmid);
}
