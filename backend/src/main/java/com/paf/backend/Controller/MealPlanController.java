



package com.paf.backend.Controller;

import com.paf.backend.Model.MealPlan;
import com.paf.backend.Repository.MealPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/mealPlan")
public class MealPlanController {

    @Autowired
    private MealPlanRepository mealPlanRepository;

    @GetMapping
    public ResponseEntity<List<MealPlan>> getAllMealPlans() {
        List<MealPlan> mealPlans = mealPlanRepository.findAll();
        if (!mealPlans.isEmpty()) {
            return new ResponseEntity<>(mealPlans, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<MealPlan> createMealPlan(@Valid @RequestBody MealPlan mealPlan) {
        MealPlan savedMealPlan = mealPlanRepository.save(mealPlan);
        return new ResponseEntity<>(savedMealPlan, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MealPlan> getMealPlanById(@PathVariable String id) {
        Optional<MealPlan> mealPlanOptional = mealPlanRepository.findById(id);
        return mealPlanOptional.map(mealPlan -> new ResponseEntity<>(mealPlan, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MealPlan> updateMealPlan(@PathVariable String id, @Valid @RequestBody MealPlan mealPlan) {
        Optional<MealPlan> existingMealPlan = mealPlanRepository.findById(id);
        if (existingMealPlan.isPresent()) {
            MealPlan updatedMealPlan = existingMealPlan.get();
            updatedMealPlan.setDay(mealPlan.getDay());
            updatedMealPlan.setBreakfast(mealPlan.getBreakfast());
            updatedMealPlan.setLunch(mealPlan.getLunch());
            updatedMealPlan.setSnack(mealPlan.getSnack());
            updatedMealPlan.setDinner(mealPlan.getDinner());
            mealPlanRepository.save(updatedMealPlan);
            return new ResponseEntity<>(updatedMealPlan, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMealPlan(@PathVariable String id) {
        mealPlanRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
