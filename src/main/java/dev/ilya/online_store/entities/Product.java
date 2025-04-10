package dev.ilya.online_store.entities;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name="products")
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

    @Column(name = "product_gender")
    private String productGender;

    @Column(name = "product_volume")
    private String productVolume;

    @Column(name = "product_country", nullable = false)
    private String productCountry;

    @Column(name = "product_price", precision = 10, scale = 2, nullable = false)
    private BigDecimal productPrice;

    @Column(name = "product_quantity_left",nullable = false)
    private int productQuantityLeft;
}
