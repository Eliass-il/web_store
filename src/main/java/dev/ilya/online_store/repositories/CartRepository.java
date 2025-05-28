package dev.ilya.online_store.repositories;

import dev.ilya.online_store.entities.Cart;
import dev.ilya.online_store.entities.Product;
import dev.ilya.online_store.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepository  extends JpaRepository<Cart, Long> {
    List<Cart> findByUser(User user);
    Optional<Cart> findByUserAndProduct (User user, Product product);
}
