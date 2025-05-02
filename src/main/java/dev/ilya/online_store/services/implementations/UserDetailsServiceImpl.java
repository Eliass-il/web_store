package dev.ilya.online_store.services.implementations;

import dev.ilya.online_store.entities.User;
import dev.ilya.online_store.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new UsernameNotFoundException("User not found"));
         return org.springframework.security.core.userdetails.User
                 .withUsername(user.getEmail())
                 .password(user.getPassword())
                 .roles(user.getRole())
                 .build();
    }
}
