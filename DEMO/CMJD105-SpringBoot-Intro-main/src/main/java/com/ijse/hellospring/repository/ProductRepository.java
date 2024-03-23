package com.ijse.hellospring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ijse.hellospring.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
}
