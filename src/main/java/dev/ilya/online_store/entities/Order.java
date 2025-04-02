package dev.ilya.online_store.entities;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "orders")
@Data
public class Order {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


}
