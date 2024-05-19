




package com.paf.backend.Controller;

import com.paf.backend.Model.WorkoutStatus;
import com.paf.backend.Repository.WorkoutStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/workouts")
public class WorkoutStatusController {

    @Autowired
    private WorkoutStatusRepository workoutStatusRepository;

    @GetMapping
    public ResponseEntity<List<WorkoutStatus>> getAllWorkoutStatus() {
        List<WorkoutStatus> workoutStatusList = workoutStatusRepository.findAll();
        if (!workoutStatusList.isEmpty()) {
            return new ResponseEntity<>(workoutStatusList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<WorkoutStatus> createWorkoutStatus(@Valid @RequestBody WorkoutStatus workoutStatus) {
        WorkoutStatus savedWorkoutStatus = workoutStatusRepository.save(workoutStatus);
        return new ResponseEntity<>(savedWorkoutStatus, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkoutStatus> getWorkoutStatusById(@PathVariable String id) {
        Optional<WorkoutStatus> workoutStatusOptional = workoutStatusRepository.findById(id);
        return workoutStatusOptional.map(workoutStatus -> new ResponseEntity<>(workoutStatus, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<WorkoutStatus> updateWorkoutStatus(@PathVariable String id, @Valid @RequestBody WorkoutStatus workoutStatus) {
        Optional<WorkoutStatus> existingWorkoutStatus = workoutStatusRepository.findById(id);
        if (existingWorkoutStatus.isPresent()) {
            WorkoutStatus updatedWorkoutStatus = existingWorkoutStatus.get();
            updatedWorkoutStatus.setExercise(workoutStatus.getExercise());
            updatedWorkoutStatus.setRoutine(workoutStatus.getRoutine());
            updatedWorkoutStatus.setSets(workoutStatus.getSets());
            updatedWorkoutStatus.setRepetitions(workoutStatus.getRepetitions());
            workoutStatusRepository.save(updatedWorkoutStatus);
            return new ResponseEntity<>(updatedWorkoutStatus, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkoutStatus(@PathVariable String id) {
        workoutStatusRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
