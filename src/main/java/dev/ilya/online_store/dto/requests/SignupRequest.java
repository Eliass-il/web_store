package dev.ilya.online_store.dto.requests;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupRequest {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String city;
    private String phoneNumber;
    private String postIndex;
}
