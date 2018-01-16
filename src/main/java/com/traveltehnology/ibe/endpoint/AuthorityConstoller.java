package com.traveltehnology.ibe.endpoint;

import com.traveltehnology.ibe.model.Authority;
import com.traveltehnology.ibe.repository.AuthorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/auto/list")
public class AuthorityConstoller {
    @Autowired
    AuthorityRepository repository;

    @GetMapping("/")
    public List<Authority> getAll(){
        return repository.findAll();
    }
}
