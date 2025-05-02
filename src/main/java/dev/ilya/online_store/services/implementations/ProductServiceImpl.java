package dev.ilya.online_store.services.implementations;

import dev.ilya.online_store.constants.errorMessage;
import dev.ilya.online_store.entities.Product;
import dev.ilya.online_store.services.ProductService;
import dev.ilya.online_store.repositories.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public Product getProductById(Long productId){
        return productRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException(String.format(errorMessage.PRODUCT_NOT_FOUND)));
    }

    @Override
    public Product getBySlug(String slug){
        return productRepository.findBySlug(slug);
    }

    @Override
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @Override
    public List<Product> searchByName(String query){
        return productRepository.findByProductTitleContainingIgnoreCase(query);
    }

    @Override
    public List<Product> getDiscountedProducts(){
        return productRepository.findByProductDiscountGreaterThan(BigDecimal.ZERO);
    }

    @Override
    public List<Product> getByCategorySlug(String slug){
        return productRepository.findByCategorySlug(slug);
    }

    @Override
    public List<Product> getByCategorySlugAndSubcategorySlug(String categorySlug, String subcategorySlug){
        return productRepository.findByCategorySlugAndSubcategorySlug(categorySlug, subcategorySlug);
    }

    @Override
    public Product saveProduct(Product product){
        Product saved = productRepository.save(product);
        String slug = product.getProductTitle()
                .toLowerCase()
                .replaceAll("[^a-z0-9]+", "-")
                .replaceAll("^-|-$", "");
        saved.setSlug(slug + "-" + saved.getId());
        return productRepository.save(saved);
    }

    @Override
    public void deleteProductById(Long id){
        productRepository.deleteById(id);
    }
}
