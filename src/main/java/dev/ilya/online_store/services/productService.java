package dev.ilya.online_store.services;

import dev.ilya.online_store.dto.requests.searchRequest;
import dev.ilya.online_store.entities.Product;
import org.springframework.data.domain.Page;

import java.awt.print.Pageable;

public interface productService {
    Product getProductById(Long productId);
    //Page<Product> getProductByFilterParams (searchRequest searchRequest, Pageable pageable);
    //Page<Product> searchProducts(searchRequest searchRequest, Pageable pageable);
}
