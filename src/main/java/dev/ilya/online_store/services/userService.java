package dev.ilya.online_store.services;

import dev.ilya.online_store.entities.User;

public interface userService {
    User getAuthenticatedUser();
    MessageResponce changePassword(changePasswordRequest request);
}
