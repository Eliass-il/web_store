package dev.ilya.online_store.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Subcategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "subcategory_name")
    private String name;

    @Column(unique = true, nullable = false)
    private String slug;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonIgnoreProperties("subcategoryList")
    private Category category;

    @OneToMany(mappedBy = "subcategory", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("subcategory")
    private List<Product> productList;
}
