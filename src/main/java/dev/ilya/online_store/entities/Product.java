package dev.ilya.online_store.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = {"id"})
public class Product {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_company",nullable = false)
    private String productCompany;

    @Column(name = "product_title",nullable = false)
    private String productTitle;

    @Column(name = "product_description",nullable = false)
    private String productDescription;

    @Column(name = "product_ingredients", nullable = false)
    private String ingredients;

    @Column(name = "product_gender", nullable = false)
    private String productGender;

    @Column(name = "product_volume", nullable = false)
    private String productVolume;

    @Column(name = "product_country", nullable = false)
    private String productCountry;

    @Column(name = "product_price", precision = 10, scale = 2, nullable = false)
    private BigDecimal productPrice;

    @Column(name = "product_discount", precision = 5, scale = 2)
    private BigDecimal productDiscount;

    @Column(name = "product_quantity_left",nullable = false)
    private int productQuantityLeft;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonIgnoreProperties("productList")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "subcategory_id")
    @JsonIgnoreProperties("productList")
    private Subcategory subcategory;
}
