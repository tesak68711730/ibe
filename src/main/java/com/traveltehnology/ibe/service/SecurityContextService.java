package com.traveltehnology.ibe.service;

import com.traveltehnology.ibe.model.User;

import java.util.Optional;

public interface SecurityContextService {

    Optional<User> currentUser();
}
