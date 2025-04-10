package dev.ilya.online_store.services.implementations;

import dev.ilya.online_store.entities.Category;
import dev.ilya.online_store.repositories.CategoryRepository;
import dev.ilya.online_store.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

}
