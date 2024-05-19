



import React, { useState, useEffect } from "react";

const FrameComponent2 = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [newMeal, setNewMeal] = useState({
    day: "Monday",
    breakfast: "",
    lunch: "",
    snack: "",
    dinner: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingMealId, setEditingMealId] = useState(null);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  useEffect(() => {
    fetch("http://localhost:8080/mealPlan")
      .then((response) => response.json())
      .then((data) => {
        setMealPlans(data);
      })
      .catch((error) => {
        console.error("Error fetching meal plans:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeal({ ...newMeal, [name]: value });
  };

  const handleAddMeal = () => {
    if (!newMeal.breakfast || !newMeal.lunch || !newMeal.snack || !newMeal.dinner) {
      alert("Please fill in all fields");
      return;
    }

    fetch("http://localhost:8080/mealPlan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeal),
    })
      .then((response) => response.json())
      .then((data) => {
        setMealPlans([...mealPlans, data]);
        setNewMeal({
          day: "Monday",
          breakfast: "",
          lunch: "",
          snack: "",
          dinner: "",
        });
      })
      .catch((error) => {
        console.error("Error adding new meal:", error);
      });
  };

  const handleEditMeal = (meal) => {
    setIsEditing(true);
    setEditingMealId(meal.id);
    setNewMeal({
      day: meal.day,
      breakfast: meal.breakfast,
      lunch: meal.lunch,
      snack: meal.snack,
      dinner: meal.dinner,
    });
  };

  const handleUpdateMeal = () => {
    if (!newMeal.breakfast || !newMeal.lunch || !newMeal.snack || !newMeal.dinner) {
      alert("Please fill in all fields");
      return;
    }

    fetch(`http://localhost:8080/mealPlan/${editingMealId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeal),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedMeals = mealPlans.map((meal) =>
          meal.id === editingMealId ? data : meal
        );
        setMealPlans(updatedMeals);
        setNewMeal({
          day: "Monday",
          breakfast: "",
          lunch: "",
          snack: "",
          dinner: "",
        });
        setIsEditing(false);
        setEditingMealId(null);
      })
      .catch((error) => {
        console.error("Error updating meal:", error);
      });
  };

  const handleClearMealDetails = (id) => {
    // Find the meal plan for the specific id
    const mealToClear = mealPlans.find(meal => meal.id === id);

    // Update the meal plan details to be empty strings while keeping the day intact
    const clearedMeal = {
      ...mealToClear,
      breakfast: "",
      lunch: "",
      snack: "",
      dinner: ""
    };

    fetch(`http://localhost:8080/mealPlan/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clearedMeal),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedMeals = mealPlans.map((meal) =>
          meal.id === id ? data : meal
        );
        setMealPlans(updatedMeals);
      })
      .catch((error) => {
        console.error("Error clearing meal details:", error);
      });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-gray-600">
        <p className="text-lg font-medium">Welcome to your meal planner!</p>
        <p className="mt-2">Here you can view and update your latest meal plan.</p>
        <p className="mt-2">To add or modify recipes, fill out the form below.</p>
      </div>

      <div className="flex items-center justify-center">
        <h3 className="text-3xl font-bold text-gray-800">Latest Meal Plan</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breakfast</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lunch</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Snack</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dinner</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mealPlans.map((meal) => (
              <tr key={meal.id}>
                <td className="px-6 py-4 whitespace-nowrap">{meal.day}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {isEditing && editingMealId === meal.id ? (
                    <input
                      type="text"
                      name="breakfast"
                      value={newMeal.breakfast}
                      onChange={handleInputChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                  ) : (
                    meal.breakfast
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {isEditing && editingMealId === meal.id ? (
                    <input
                      type="text"
                      name="lunch"
                      value={newMeal.lunch}
                      onChange={handleInputChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                  ) : (
                    meal.lunch
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {isEditing && editingMealId === meal.id ? (
                    <input
                      type="text"
                      name="snack"
                      value={newMeal.snack}
                      onChange={handleInputChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                  ) : (
                    meal.snack
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {isEditing && editingMealId === meal.id ? (
                    <input
                      type="text"
                      name="dinner"
                      value={newMeal.dinner}
                      onChange={handleInputChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                  ) : (
                    meal.dinner
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {isEditing && editingMealId === meal.id ? (
                    <button
                      onClick={handleUpdateMeal}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md mr-2"
                    >
                      Update
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditMeal(meal)}
                        className="px-4 py-2 bg-green-600 text-white rounded-md mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleClearMealDetails(meal.id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-md"
                      >
                        Clear
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center">
        <img src="https://www.veganeasy.org/wp-content/uploads/2020/09/nutrition_chart_102-1.jpg" alt="Food and Nutrition" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default FrameComponent2;



