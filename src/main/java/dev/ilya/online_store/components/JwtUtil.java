package dev.ilya.online_store.components;

import org.springframework.stereotype.Component;
import io.jsonwebtoken.*;
import javax.crypto.SecretKey;
import io.jsonwebtoken.security.Keys;

import java.util.Date;

@Component
public class JwtUtil {

    private final SecretKey secretKey = Keys.hmacShaKeyFor("your-256-bit-secret-your-256-bit-secret".getBytes());
    private final int jwtExpirationsMs = 21600000; //6 hours

    public String generateToken(String email){
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationsMs))
                .signWith(secretKey)
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }
}
