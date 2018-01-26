package com.traveltehnology.ibe.endpoint;

import com.traveltehnology.ibe.model.Flights;
import com.traveltehnology.ibe.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/flight")
public class FlightController {

    @Autowired
    private FlightRepository flightRepository;

    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Flights> getAll(){
        return flightRepository.findAll();
    }
}
