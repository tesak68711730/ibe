package com.traveltehnology.ibe.repository;

import com.traveltehnology.ibe.model.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorityRepository extends JpaRepository<Authority, Integer> {
    @Override
    Authority findOne(Integer integer);
}
