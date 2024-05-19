package com.paf.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;


@Document(collection = "workouts")
public class WorkoutStatus {
    @Id
    private String id;

    @NotNull(message = "Exercise cannot be null")
    private String exercise;

    @NotNull(message = "Routine cannot be null")
    private String routine;

    @NotNull(message = "Sets cannot be null")
    private int sets;

    @NotNull(message = "Repetitions cannot be null")
    private int repetitions;


    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getExercise() {
        return exercise;
    }

    public void setExercise(String exercise) {
        this.exercise = exercise;
    }

    public String getRoutine() {
        return routine;
    }

    public void setRoutine(String routine) {
        this.routine = routine;
    }

    public int getSets() {
        return sets;
    }

    public void setSets(int sets) {
        this.sets = sets;
    }

    public int getRepetitions() {
        return repetitions;
    }

    public void setRepetitions(int repetitions) {
        this.repetitions = repetitions;
    }


}
