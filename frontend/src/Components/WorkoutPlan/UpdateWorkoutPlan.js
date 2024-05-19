// import React, { useState } from "react";
// import CloseIcon from '@mui/icons-material/Close';
// import { IconButton, TextField, MenuItem } from '@mui/material';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import { useFormik } from 'formik';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 600,
//   bgcolor: 'background.paper',
//   border: 'none',
//   boxShadow: 24,
//   Padding:4,
//   outline: 'none',
//   borderRadius:4,
// };

// const UpdateWorkoutPlan = ({ exercises }) => {
//   const [open, setOpen] = useState(false);

//   const handleSubmit = (values) => {
//     console.log("handle submit", values);
//   };

//   const formik = useFormik({
//     initialValues:{
//       routine: "",
//       exercise: "", // Added exercise field
//       sets: "",
//       repetitions: "",
//     },
//     onSubmit: handleSubmit,
//   });

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={handleOpen} className="px-4 py-2 bg-gray-200 text-lg font-medium rounded-full">
//           Update Exercise Plan
//         </button>
//       </div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <form onSubmit={formik.handleSubmit}>
//             <div className='flex items-center justify-between'>
//               <div className='flex items-center space-x-3'>
//                 <IconButton onClick={handleClose} aria-label="delete">
//                   <CloseIcon/>
//                 </IconButton>
//                 <p className=''>Update Exercise Plan</p>
//               </div>
//             </div>
//             <div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
//               <div className="space-y-3">
//                 {/* Dropdown menu for selecting exercise */}
//                 <TextField
//                   select
//                   fullWidth
//                   id="exercise"
//                   name="exercise"
//                   label="Exercise"
//                   value={formik.values.exercise}
//                   onChange={formik.handleChange}
//                   required
//                 >
//                   {exercises.map((exercise) => (
//                     <MenuItem key={exercise} value={exercise}>
//                       {exercise}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//                 <TextField
//                   fullWidth
//                   id="routine"
//                   name="routine"
//                   label="Routine"
//                   value={formik.values.routine}
//                   onChange={formik.handleChange}
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   type="number"
//                   id="sets"
//                   name="sets"
//                   label="Sets"
//                   value={formik.values.sets}
//                   onChange={formik.handleChange}
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   type="number"
//                   id="repetitions"
//                   name="repetitions"
//                   label="Repetitions"
//                   value={formik.values.repetitions}
//                   onChange={formik.handleChange}
//                   required
//                 />
//                 <div className="flex items-center justify-center h-full">
//                   <button type="submit" className="px-4 py-2 bg-gray-200 text-lg font-medium rounded-full">
//                     Update
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default UpdateWorkoutPlan;



// import React, { useState } from "react";
// import CloseIcon from '@mui/icons-material/Close';
// import { IconButton, TextField, MenuItem } from '@mui/material';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import { useFormik } from 'formik';
// import axios from 'axios';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 600,
//   bgcolor: 'background.paper',
//   border: 'none',
//   boxShadow: 24,
//   padding: 4,
//   outline: 'none',
//   borderRadius: 4,
// };

// const UpdateWorkoutPlan = ({ exercises }) => {
//   const [open, setOpen] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = (values) => {
//     axios.put(`http://localhost:8080/workouts/${values.id}`, values)
//       .then(response => {
//         console.log("Exercise plan updated successfully:", response.data);
//         setSuccessMessage("Exercise plan updated successfully!");
//         handleClose(); // Close the modal after successful update
//       })
//       .catch(error => {
//         console.error("Error updating exercise plan:", error);
//         setSuccessMessage("Error updating exercise plan. Please try again.");
//       });
//   };

//   const formik = useFormik({
//     initialValues:{
//       id: "", // Add id field for the workout ID
//       routine: "",
//       exercise: "",
//       sets: "",
//       repetitions: "",
//     },
//     onSubmit: handleSubmit,
//   });

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     // Reset success message when closing the modal
//     setSuccessMessage("");
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={handleOpen} className="px-4 py-2 bg-gray-200 text-lg font-medium rounded-full">
//           Update Exercise Plan
//         </button>
//       </div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <form onSubmit={formik.handleSubmit}>
//             <div className='flex items-center justify-between'>
//               <div className='flex items-center space-x-3'>
//                 <IconButton onClick={handleClose} aria-label="delete">
//                   <CloseIcon/>
//                 </IconButton>
//                 <p className=''>Update Exercise Plan</p>
//               </div>
//             </div>
//             <div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
//               <div className="space-y-3">
//                 {/* Dropdown menu for selecting exercise */}
//                 <TextField
//                   select
//                   fullWidth
//                   id="exercise"
//                   name="exercise"
//                   label="Exercise"
//                   value={formik.values.exercise}
//                   onChange={formik.handleChange}
//                   required
//                 >
//                   {exercises.map((exercise) => (
//                     <MenuItem key={exercise} value={exercise}>
//                       {exercise}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//                 <TextField
//                   fullWidth
//                   id="routine"
//                   name="routine"
//                   label="Routine"
//                   value={formik.values.routine}
//                   onChange={formik.handleChange}
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   type="number"
//                   id="sets"
//                   name="sets"
//                   label="Sets"
//                   value={formik.values.sets}
//                   onChange={formik.handleChange}
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   type="number"
//                   id="repetitions"
//                   name="repetitions"
//                   label="Repetitions"
//                   value={formik.values.repetitions}
//                   onChange={formik.handleChange}
//                   required
//                 />
//                 {successMessage && <p className="text-green-600">{successMessage}</p>}
//                 <div className="flex items-center justify-center h-full">
//                   <button type="submit" className="px-4 py-2 bg-gray-200 text-lg font-medium rounded-full">
//                     Update
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default UpdateWorkoutPlan;



import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, TextField, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  padding: 4,
  outline: 'none',
  borderRadius: 4,
};

const UpdateWorkoutPlan = ({ exercises }) => {
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (values) => {
    axios.put(`http://localhost:8080/workouts/${values.id}`, values)
      .then(response => {
        console.log("Exercise plan updated successfully:", response.data);
        setSuccessMessage("Exercise plan updated successfully!");
        handleClose(); // Close the modal after successful update
      })
      .catch(error => {
        console.error("Error updating exercise plan:", error);
        setSuccessMessage("Error updating exercise plan. Please try again.");
      });
  };

  const formik = useFormik({
    initialValues:{
      id: "",
      routine: "",
      exercise: "",
      sets: "",
      repetitions: "",
    },
    onSubmit: handleSubmit,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSuccessMessage("");
  };

  return (
    <div>
      <div>
        <button onClick={handleOpen} className="px-4 py-2 bg-gray-200 text-lg font-medium rounded-full">
          Update Exercise Plan
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose} aria-label="delete">
                  <CloseIcon/>
                </IconButton>
                <p className=''>Update Exercise Plan</p>
              </div>
            </div>
            <div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
              <div className="space-y-3">
                <TextField
                  select
                  fullWidth
                  id="exercise"
                  name="exercise"
                  label="Exercise"
                  value={formik.values.exercise}
                  onChange={formik.handleChange}
                  required
                >
                  {exercises.map((exercise) => (
                    <MenuItem key={exercise.id} value={exercise.id}>
                      {exercise.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  id="routine"
                  name="routine"
                  label="Routine"
                  value={formik.values.routine}
                  onChange={formik.handleChange}
                  required
                />
                <TextField
                  fullWidth
                  type="number"
                  id="sets"
                  name="sets"
                  label="Sets"
                  value={formik.values.sets}
                  onChange={formik.handleChange}
                  required
                />
                <TextField
                  fullWidth
                  type="number"
                  id="repetitions"
                  name="repetitions"
                  label="Repetitions"
                  value={formik.values.repetitions}
                  onChange={formik.handleChange}
                  required
                />
                {successMessage && <p className="text-green-600">{successMessage}</p>}
                <div className="flex items-center justify-center h-full">
                  <button type="submit" className="px-4 py-2 bg-gray-200 text-lg font-medium rounded-full">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateWorkoutPlan;
