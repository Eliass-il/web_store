package dev.ilya.online_store.services;

import dev.ilya.online_store.entities.Category;

import java.util.List;


public interface CategoryService {
    List<Category> getAllCategories();
}
