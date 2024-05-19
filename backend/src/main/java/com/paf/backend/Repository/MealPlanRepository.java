package com.paf.backend.Repository;

import com.paf.backend.Model.MealPlan;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealPlanRepository extends MongoRepository<MealPlan, String> {
    Optional<MealPlan> findById(String id);
}
