package dev.ilya.online_store.services;

import dev.ilya.online_store.entities.Product;
import org.hibernate.query.Page;

import java.awt.print.Pageable;

public interface productService {
    Product getProductById(Long productId);
    Page<Product> getProductByFilterParams (SearchRequest searchRequest, Pageable pageable);
    Page<Product> searchProducts(SearchRequest searchRequest, Pageable pageable);
}
