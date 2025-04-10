package dev.ilya.online_store.services;

import dev.ilya.online_store.entities.User;

public interface UserService {
    User getAuthenticatedUser();
    //MessageResponce changePassword(changePasswordRequest request);
}
