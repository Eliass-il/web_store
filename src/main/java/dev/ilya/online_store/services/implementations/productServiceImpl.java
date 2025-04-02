package dev.ilya.online_store.services.implementations;

import dev.ilya.online_store.entities.Product;
import dev.ilya.online_store.services.productService;
import dev.ilya.online_store.repositories.productRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
@RequiredArgsConstructor
public class productServiceImpl implements productService {

    private final productRepository productRepository;
    @Override
    public Product getProductById(Long productId){
        return productRepository.findById(productId).orElseThrow(() -> ResponseStatusException(HttpStatus.NOT_FOUND, ErrorMessage.PRODUCT_NOT_FOUND));
    }
}
