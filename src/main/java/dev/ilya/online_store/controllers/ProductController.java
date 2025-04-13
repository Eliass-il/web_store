package dev.ilya.online_store.controllers;

import dev.ilya.online_store.entities.Product;
import dev.ilya.online_store.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("api/product")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("id/{id}")
    public Product getProductById(@PathVariable Long id){
        return productService.getProductById(id);
    }

    @GetMapping("/discounted")
    public List<Product> getDiscountedProducts(){
        return productService.getDiscountedProducts();
    }

    @GetMapping("/search")
    public List<Product> searchByName(@RequestParam String query){
        return productService.searchByName(query);
    }

    @GetMapping("/{categorySlug}")
    public List<Product> getByCategorySlug(@PathVariable String categorySlug){
        return productService.getByCategorySlug(categorySlug);
    }

    @GetMapping("/{categorySlug}/{subcategorySlug}")
    public List<Product> getByCategorySlugAndSubcategorySlug(@PathVariable String categorySlug, @PathVariable String subcategorySlug){
        return productService.getByCategorySlugAndSubcategorySlug(categorySlug, subcategorySlug);
    }

    @PostMapping
    public Product saveProduct(@RequestBody Product product){
        return productService.saveProduct(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updated){
        updated.setId(id);
        return productService.saveProduct(updated);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id){
        productService.deleteProductById(id);
    }

}
