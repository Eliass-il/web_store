package dev.ilya.online_store.controllers;


import dev.ilya.online_store.entities.Category;
import dev.ilya.online_store.services.CategoryService;
import dev.ilya.online_store.services.implementations.CategoryServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/category")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }

}
