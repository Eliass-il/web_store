package dev.ilya.online_store.services;

import dev.ilya.online_store.entities.Cart;
import dev.ilya.online_store.entities.User;

import java.util.List;

public interface CartService {
    void addToCart(User user, Long productId, int quantity);
    List<Cart> getCart(User user);
    void removeFromCart(User user,Long productId);
}
