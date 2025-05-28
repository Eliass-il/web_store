package dev.ilya.online_store.controllers;

import dev.ilya.online_store.components.JwtUtil;
import dev.ilya.online_store.entities.Cart;
import dev.ilya.online_store.entities.User;
import dev.ilya.online_store.repositories.UserRepository;
import dev.ilya.online_store.services.implementations.CartServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartServiceImpl cartService;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    private User getCurrentUser(HttpServletRequest request){
        String token = jwtUtil.extractTokenFromRequest(request);
        String email = jwtUtil.extractUsername(token);
        return userRepository.findByEmail(email).orElseThrow();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestParam Long productId, @RequestParam int quantity, HttpServletRequest request){
        User user = getCurrentUser(request);
        cartService.addToCart(user, productId, quantity);
        return ResponseEntity.ok("Product added to cart");
    }

    @GetMapping
    public ResponseEntity<List<Cart>> getCart(HttpServletRequest request){
        User user = getCurrentUser(request);
        return ResponseEntity.ok(cartService.getCart(user));
    }

    @DeleteMapping("/remove/{productId}")
    public ResponseEntity<?> removeFromCart(@PathVariable Long productId, HttpServletRequest request){
        User user = getCurrentUser(request);
        cartService.removeFromCart(user, productId);
        return ResponseEntity.ok("Product removed from cart");
    }


}
