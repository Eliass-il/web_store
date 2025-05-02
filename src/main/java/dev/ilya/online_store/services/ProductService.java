package dev.ilya.online_store.services;

import dev.ilya.online_store.entities.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    List<Product> searchByName(String query);
    List<Product> getDiscountedProducts();
    Product getProductById(Long id);
    Product saveProduct(Product product);
    void deleteProductById(Long id);
    List<Product> getByCategorySlug(String slug);
    List<Product> getByCategorySlugAndSubcategorySlug(String categorySlug, String subcategorySlug);
    Product getBySlug(String slug);
}
