package com.paf.backend.Repository;

import com.paf.backend.Model.WorkoutStatus;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutStatusRepository extends MongoRepository<WorkoutStatus, String> {
    Optional<WorkoutStatus> findById(String id);
}


