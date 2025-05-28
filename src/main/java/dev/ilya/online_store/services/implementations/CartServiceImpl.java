package dev.ilya.online_store.services.implementations;

import dev.ilya.online_store.entities.Cart;
import dev.ilya.online_store.entities.Product;
import dev.ilya.online_store.entities.User;
import dev.ilya.online_store.repositories.CartRepository;
import dev.ilya.online_store.repositories.ProductRepository;
import dev.ilya.online_store.services.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final ProductRepository productRepository;
    private final CartRepository cartRepository;

    @Override
    public void addToCart(User user, Long productId, int quantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found."));
        Cart cart = cartRepository.findByUserAndProduct(user, product)
                .orElse(new Cart(null, user, product, 0));
        cart.setQuantity(cart.getQuantity() + quantity);
        cartRepository.save(cart);
    }

    @Override
    public List<Cart> getCart(User user) {
        return cartRepository.findByUser(user);
    }

    @Override
    public void removeFromCart(User user, Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found."));
        cartRepository.findByUserAndProduct(user, product)
                .ifPresent(cartRepository :: delete);
    }
}
