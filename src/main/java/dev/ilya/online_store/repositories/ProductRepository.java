package dev.ilya.online_store.repositories;

import dev.ilya.online_store.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByProductDiscountGreaterThan(BigDecimal discount);
    List<Product> findByProductTitleContainingIgnoreCase(String title);
    List<Product> findByCategorySlug(String slug);
    List<Product> findByCategorySlugAndSubcategorySlug(String categorySlug, String subcategorySlug);
    Product findBySlug(String slug);
}
