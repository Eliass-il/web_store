package dev.ilya.online_store.repositories;

import dev.ilya.online_store.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigDecimal;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByProductDiscountGreaterThan(BigDecimal discount);
    List<Product> findByProductTitleContainingIgnoreCase(String title);
}
