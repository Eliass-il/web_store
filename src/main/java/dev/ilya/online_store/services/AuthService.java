package dev.ilya.online_store.services;

import dev.ilya.online_store.dto.requests.LoginRequest;
import dev.ilya.online_store.dto.requests.SignupRequest;
import dev.ilya.online_store.dto.responses.JwtResponse;
import dev.ilya.online_store.entities.User;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    ResponseEntity<?> register(SignupRequest signupRequest);
    ResponseEntity<JwtResponse> login(LoginRequest loginRequest);
}
