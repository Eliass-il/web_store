package dev.ilya.online_store.services.implementations;

import dev.ilya.online_store.components.JwtUtil;
import dev.ilya.online_store.dto.requests.LoginRequest;
import dev.ilya.online_store.dto.requests.SignupRequest;
import dev.ilya.online_store.dto.responses.JwtResponse;
import dev.ilya.online_store.entities.User;
import dev.ilya.online_store.repositories.UserRepository;
import dev.ilya.online_store.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    @Override
    public ResponseEntity<?> register(SignupRequest signupRequest){
        if (userRepository.findByEmail(signupRequest.getEmail()).isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Email is already in use.");
        }

        User user = new User();
        user.setFirstName(signupRequest.getFirstName());
        user.setLastName(signupRequest.getLastName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setCity(signupRequest.getCity());
        user.setPhoneNumber(signupRequest.getPhoneNumber());
        user.setPostIndex(signupRequest.getPostIndex());

        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully.");
    }

    @Override
    public ResponseEntity<JwtResponse> login(LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );
        String token = jwtUtil.generateToken(loginRequest.getEmail());

        return ResponseEntity.ok(new JwtResponse(token));
    }
}
