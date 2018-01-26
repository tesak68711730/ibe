package com.traveltehnology.ibe.repository;

import com.traveltehnology.ibe.model.Flights;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
public interface FlightRepository extends JpaRepository<Flights, Long> {
//    Customer findByLastName(String name);
//
//    Customer findOne(Long id);
}