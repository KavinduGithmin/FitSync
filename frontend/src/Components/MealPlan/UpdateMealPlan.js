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

// const UpdateMealPlan = ({ days }) => {
//   const [open, setOpen] = useState(false);

//   const handleSubmit = (values) => {
//     console.log("handle submit", values);
//   };

//   const formik = useFormik({
//     initialValues:{
//       day: "",
//       breakfast: "",
//       lunch: "",
//       snack: "",
//       dinner: "",
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
//         Update Recipe
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
//                 <p className=''>Update Recipe</p>
//               </div>
//             </div>
//             <div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
//               <div className="space-y-3">
//                 {/* Dropdown menu for selecting day */}
//                 <TextField
//                   select
//                   fullWidth
//                   id="day"
//                   name="day"
//                   label="Day"
//                   value={formik.values.day}
//                   onChange={formik.handleChange}
//                   required
//                 >
//                   {days.map((day) => (
//                     <MenuItem key={day} value={day}>
//                       {day}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//                 <TextField
//                   fullWidth
//                   id="breakfast"
//                   name="breakfast"
//                   label="Breakfast"
//                   value={formik.values.breakfast}
//                   onChange={formik.handleChange}
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   id="lunch"
//                   name="lunch"
//                   label="Lunch"
//                   value={formik.values.lunch}
//                   onChange={formik.handleChange}
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   id="snack"
//                   name="snack"
//                   label="Snack"
//                   value={formik.values.snack}
//                   onChange={formik.handleChange}
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   id="dinner"
//                   name="dinner"
//                   label="Dinner"
//                   value={formik.values.dinner}
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

// export default UpdateMealPlan;




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

const UpdateMealPlan = ({ days }) => {
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (values) => {
    axios.put('http://localhost:7071/mealPlan', values)
      .then(response => {
        console.log("Meal plan updated successfully:", response.data);
        setSuccessMessage("Meal plan updated successfully!");
        handleClose(); // Close the modal after successful update
      })
      .catch(error => {
        console.error("Error updating meal plan:", error);
        setSuccessMessage("Error updating meal plan. Please try again.");
      });
  };

  const formik = useFormik({
    initialValues:{
      day: "",
      breakfast: "",
      lunch: "",
      snack: "",
      dinner: "",
    },
    onSubmit: handleSubmit,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Reset success message when closing the modal
    setSuccessMessage("");
  };

  return (
    <div>
      <div>
        <button onClick={handleOpen} className="px-4 py-2 bg-gray-200 text-lg font-medium rounded-full">
        Update Recipe
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
                <p className=''>Update Recipe</p>
              </div>
            </div>
            <div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
              <div className="space-y-3">
                {/* Dropdown menu for selecting day */}
                <TextField
                  select
                  fullWidth
                  id="day"
                  name="day"
                  label="Day"
                  value={formik.values.day}
                  onChange={formik.handleChange}
                  required
                >
                  {days.map((day) => (
                    <MenuItem key={day} value={day}>
                      {day}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  id="breakfast"
                  name="breakfast"
                  label="Breakfast"
                  value={formik.values.breakfast}
                  onChange={formik.handleChange}
                  required
                />
                <TextField
                  fullWidth
                  id="lunch"
                  name="lunch"
                  label="Lunch"
                  value={formik.values.lunch}
                  onChange={formik.handleChange}
                  required
                />
                <TextField
                  fullWidth
                  id="snack"
                  name="snack"
                  label="Snack"
                  value={formik.values.snack}
                  onChange={formik.handleChange}
                  required
                />
                <TextField
                  fullWidth
                  id="dinner"
                  name="dinner"
                  label="Dinner"
                  value={formik.values.dinner}
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

export default UpdateMealPlan;
