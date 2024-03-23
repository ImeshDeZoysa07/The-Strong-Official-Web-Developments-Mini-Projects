package com.ijse.hellospring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ijse.hellospring.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    
} 
