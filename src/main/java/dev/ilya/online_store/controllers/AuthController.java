package dev.ilya.online_store.controllers;


import dev.ilya.online_store.dto.requests.LoginRequest;
import dev.ilya.online_store.dto.requests.SignupRequest;
import dev.ilya.online_store.dto.responses.JwtResponse;
import dev.ilya.online_store.services.implementations.AuthServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthServiceImpl authService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest){
        return authService.register(signupRequest);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> loginUser(@RequestBody LoginRequest loginRequest){
        return authService.login(loginRequest);
    }
}
