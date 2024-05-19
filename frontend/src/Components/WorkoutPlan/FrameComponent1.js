




// import React, { useState, useEffect } from "react";

// const FrameComponent1 = () => {
//   const [workoutStatusList, setWorkoutStatusList] = useState([]);
//   const [newExercise, setNewExercise] = useState({ exercise: "", routine: "", sets: "", repetitions: "" });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editExerciseId, setEditExerciseId] = useState(null);

//   useEffect(() => {
//     // Fetch workout status data from backend
//     fetch("http://localhost:8080/workouts")
//       .then((response) => response.json())
//       .then((data) => {
//         setWorkoutStatusList(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching workout status:", error);
//       });
//   }, []); // Empty dependency array to only run once on component mount

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewExercise({ ...newExercise, [name]: value });
//   };

//   const handleAddExercise = () => {
//     // Validate input fields
//     if (!newExercise.exercise || !newExercise.routine || !newExercise.sets || !newExercise.repetitions) {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Post new exercise to backend
//     fetch("http://localhost:8080/workouts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newExercise),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setWorkoutStatusList([...workoutStatusList, data]);
//         setNewExercise({ exercise: "", routine: "", sets: "", repetitions: "" });
//       })
//       .catch((error) => {
//         console.error("Error adding new exercise:", error);
//       });
//   };

//   const handleEditExercise = (exercise) => {
//     setIsEditing(true);
//     setEditExerciseId(exercise.id);
//     setNewExercise({
//       exercise: exercise.exercise,
//       routine: exercise.routine,
//       sets: exercise.sets,
//       repetitions: exercise.repetitions,
//     });
//   };

//   const handleUpdateExercise = () => {
//     // Validate input fields
//     if (!newExercise.exercise || !newExercise.routine || !newExercise.sets || !newExercise.repetitions) {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Put updated exercise to backend
//     fetch(`http://localhost:8080/workouts/${editExerciseId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newExercise),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setWorkoutStatusList(
//           workoutStatusList.map((exercise) =>
//             exercise.id === editExerciseId ? data : exercise
//           )
//         );
//         setIsEditing(false);
//         setEditExerciseId(null);
//         setNewExercise({ exercise: "", routine: "", sets: "", repetitions: "" });
//       })
//       .catch((error) => {
//         console.error("Error updating exercise:", error);
//       });
//   };

//   const handleDeleteExercise = (id) => {
//     // Delete exercise from backend
//     fetch(`http://localhost:8080/workouts/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (response.ok) {
//           setWorkoutStatusList(workoutStatusList.filter((exercise) => exercise.id !== id));
//         } else {
//           console.error("Error deleting exercise");
//         }
//       })
//       .catch((error) => {
//         console.error("Error deleting exercise:", error);
//       });
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex items-center justify-center">
//         <h3 className="text-3xl font-bold text-gray-800">Latest Workout Plan</h3>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exercise</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Routine</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sets</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Repetitions</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {workoutStatusList.map((workoutStatus) => (
//               <tr key={workoutStatus.id}>
//                 <td className="px-6 py-4 whitespace-nowrap">{workoutStatus.exercise}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{workoutStatus.routine}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{workoutStatus.sets}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{workoutStatus.repetitions}</td>
//                 <td className="px-6 py-4 whitespace-nowrap space-x-2">
//                   <button
//                     onClick={() => handleEditExercise(workoutStatus)}
//                     className="px-4 py-2 bg-yellow-500 text-white rounded-md"
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={() => handleDeleteExercise(workoutStatus.id)}
//                     className="px-4 py-2 bg-red-600 text-white rounded-md"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-xl font-semibold text-gray-800">{isEditing ? "Update Exercise" : "Add New Exercise"}</h3>
//         <div className="mt-4 space-y-4">
//           <div>
//             <label className="block text-gray-700">Exercise</label>
//             <input
//               type="text"
//               name="exercise"
//               value={newExercise.exercise}
//               onChange={handleInputChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Routine</label>
//             <input
//               type="text"
//               name="routine"
//               value={newExercise.routine}
//               onChange={handleInputChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Sets</label>
//             <input
//               type="number"
//               name="sets"
//               value={newExercise.sets}
//               onChange={handleInputChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Repetitions</label>
//             <input
//               type="number"
//               name="repetitions"
//               value={newExercise.repetitions}
//               onChange={handleInputChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <button
//             onClick={isEditing ? handleUpdateExercise : handleAddExercise}
//             className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
//           >
//             {isEditing ? "Update Exercise" : "Add Exercise"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrameComponent1;


import React, { useState, useEffect } from "react";

const FrameComponent1 = () => {
  const [workoutStatusList, setWorkoutStatusList] = useState([]);
  const [newExercise, setNewExercise] = useState({ exercise: "", routine: "", sets: "", repetitions: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editExerciseId, setEditExerciseId] = useState(null);

  useEffect(() => {
    // Fetch workout status data from backend
    fetch("http://localhost:8080/workouts")
      .then((response) => response.json())
      .then((data) => {
        setWorkoutStatusList(data);
      })
      .catch((error) => {
        console.error("Error fetching workout status:", error);
      });
  }, []); // Empty dependency array to only run once on component mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExercise({ ...newExercise, [name]: value });
  };

  const handleAddExercise = () => {
    // Validate input fields
    if (!newExercise.exercise || !newExercise.routine || !newExercise.sets || !newExercise.repetitions) {
      alert("Please fill in all fields");
      return;
    }

    // Post new exercise to backend
    fetch("http://localhost:8080/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise),
    })
      .then((response) => response.json())
      .then((data) => {
        setWorkoutStatusList([...workoutStatusList, data]);
        setNewExercise({ exercise: "", routine: "", sets: "", repetitions: "" });
      })
      .catch((error) => {
        console.error("Error adding new exercise:", error);
      });
  };

  const handleEditExercise = (exercise) => {
    setIsEditing(true);
    setEditExerciseId(exercise.id);
    setNewExercise({
      exercise: exercise.exercise,
      routine: exercise.routine,
      sets: exercise.sets,
      repetitions: exercise.repetitions,
    });
  };

  const handleUpdateExercise = () => {
    // Validate input fields
    if (!newExercise.exercise || !newExercise.routine || !newExercise.sets || !newExercise.repetitions) {
      alert("Please fill in all fields");
      return;
    }

    // Put updated exercise to backend
    fetch(`http://localhost:8080/workouts/${editExerciseId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise),
    })
      .then((response) => response.json())
      .then((data) => {
        setWorkoutStatusList(
          workoutStatusList.map((exercise) =>
            exercise.id === editExerciseId ? data : exercise
          )
        );
        setIsEditing(false);
        setEditExerciseId(null);
        setNewExercise({ exercise: "", routine: "", sets: "", repetitions: "" });
      })
      .catch((error) => {
        console.error("Error updating exercise:", error);
      });
  };

  const handleDeleteExercise = (id) => {
    // Delete exercise from backend
    fetch(`http://localhost:8080/workouts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setWorkoutStatusList(workoutStatusList.filter((exercise) => exercise.id !== id));
        } else {
          console.error("Error deleting exercise");
        }
      })
      .catch((error) => {
        console.error("Error deleting exercise:", error);
      });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-center">
        <h3 className="text-3xl font-bold text-gray-800">Latest Workout Plan</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Exercise</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Routine</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Sets</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Repetitions</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {workoutStatusList.map((workoutStatus) => (
              <tr key={workoutStatus.id}>
                <td className="px-6 py-4 whitespace-nowrap">{workoutStatus.exercise}</td>
                <td className="px-6 py-4 whitespace-nowrap">{workoutStatus.routine}</td>
                <td className="px-6 py-4 whitespace-nowrap">{workoutStatus.sets}</td>
                <td className="px-6 py-4 whitespace-nowrap">{workoutStatus.repetitions}</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button
                    onClick={() => handleEditExercise(workoutStatus)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteExercise(workoutStatus.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">{isEditing ? "Update Exercise" : "Add New Exercise"}</h3>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-700">Exercise</label>
            <input
              type="text"
              name="exercise"
              value={newExercise.exercise}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Routine</label>
            <input
              type="text"
              name="routine"
              value={newExercise.routine}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Sets</label>
            <input
              type="number"
              name="sets"
              value={newExercise.sets}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Repetitions</label>
            <input
              type="number"
              name="repetitions"
              value={newExercise.repetitions}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={isEditing ? handleUpdateExercise : handleAddExercise}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            {isEditing ? "Update Exercise" : "Add Exercise"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;

