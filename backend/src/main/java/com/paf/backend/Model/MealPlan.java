// package com.paf.backend.Model;

// import org.springframework.data.annotation.Id;
// import org.springframework.data.mongodb.core.mapping.Document;

// import javax.validation.constraints.NotNull;


// @Document(collection = "mealPlans")
// public class MealPlan {
//     @Id
//     private String id;

//     @NotNull(message = "Day cannot be null")
//     private String day;

//     @NotNull(message = "Breakfast cannot be null")
//     private String breakfast;

//     @NotNull(message = "Lunch cannot be null")
//     private String lunch;

//     @NotNull(message = "Snack cannot be null")
//     private String snack;

//     @NotNull(message = "Dinner cannot be null")
//     private String dinner;

//     // Getters and Setters

//     public String getId() {
//         return id;
//     }

//     public void setId(String id) {
//         this.id = id;
//     }

//     public String getDay() {
//         return day;
//     }

//     public void setDay(String day) {
//         this.day = day;
//     }

//     public String getBreakfast() {
//         return breakfast;
//     }

//     public void setBreakfast(String breakfast) {
//         this.breakfast = breakfast;
//     }

//     public String getLunch() {
//         return lunch;
//     }

//     public void setLunch(String lunch) {
//         this.lunch = lunch;
//     }

//     public String getSnack() {
//         return snack;
//     }

//     public void setSnack(String snack) {
//         this.snack = snack;
//     }

//     public String getDinner() {
//         return dinner;
//     }

//     public void setDinner(String dinner) {
//         this.dinner = dinner;
//     }
// }







package com.paf.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;

@Document(collection = "mealPlans")
public class MealPlan {
    @Id
    private String id;

    @NotNull(message = "Day cannot be null")
    private String day;

    @NotNull(message = "Breakfast cannot be null")
    private String breakfast;

    @NotNull(message = "Lunch cannot be null")
    private String lunch;

    @NotNull(message = "Snack cannot be null")
    private String snack;

    @NotNull(message = "Dinner cannot be null")
    private String dinner;

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getBreakfast() {
        return breakfast;
    }

    public void setBreakfast(String breakfast) {
        this.breakfast = breakfast;
    }

    public String getLunch() {
        return lunch;
    }

    public void setLunch(String lunch) {
        this.lunch = lunch;
    }

    public String getSnack() {
        return snack;
    }

    public void setSnack(String snack) {
        this.snack = snack;
    }

    public String getDinner() {
        return dinner;
    }

    public void setDinner(String dinner) {
        this.dinner = dinner;
    }
}
