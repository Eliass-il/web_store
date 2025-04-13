package dev.ilya.online_store.services;

import dev.ilya.online_store.entities.Product;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface ProductService {
    public List<Product> getAllProducts();
    public List<Product> searchByName(String query);
    public List<Product> getDiscountedProducts();
    public Product getProductById(Long id);
    public Product saveProduct(Product product);
    public void deleteProductById(Long id);
    public List<Product> getByCategorySlug(String slug);
    public List<Product> getByCategorySlugAndSubcategorySlug(String categorySlug, String subcategorySlug);
}
