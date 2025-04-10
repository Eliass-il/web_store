package dev.ilya.online_store.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "user_first_name", nullable = false)
    private String user_first_name;

    @Column (name = "user_last_name", nullable = false)
    private String user_last_name;

    @Column (name = "user_email", nullable = false)
    private String user_email;

    @Column (name = "user_password", nullable = false)
    private String user_password;

    @Column(name = "user_city")
    private String user_city;

    @Column(name = "user_phone_number")
    private String user_phone_number;

    @Column(name = "post_index")
    private String post_index;

}
