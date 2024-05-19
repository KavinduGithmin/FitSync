// import React, { useState } from "react";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import { BusinessCenter, KeyboardBackspace } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { Avatar } from "@mui/material";
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { Button } from "@mui/material";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import Post from "../HomeSection/Post";


// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import TabContext from '@mui/lab/TabContext';
// import ProfileModal from "./ProfileModal";
// import WorkoutPlan from '../WorkoutPlan/WorkoutPlan';
// import MealPlan from '../MealPlan/MealPlan';

// const Profile = () => {
//     const [tabValue,setTabValue]=useState("1")
//   const navigate = useNavigate();
//   const [openProfileModal,setOpenProfileModal]=useState(false);
//   const handleOpenProfileModel = () => setOpenProfileModal(true);
//   const handleClose = () => setOpenProfileModal(false);

//   const handleBack = () => navigate(-1);

//   //const handleOpenProfileModel = () => {
//   //  console.log("open profile model");
//   //};

//   const handleFollowUser = () => {
//     console.log("follow user");
//   };

//   const handleTabChange = (event,newValue) => {
//     setTabValue(newValue)

//     if(newValue===4){
//     console.log("likes post")
//     }
//     else if(newValue===1){
//         console.log("users post")
//     }
//   };

//   return (
//     <div>
//       <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
//         <KeyboardBackspaceIcon
//           className="cursor-pointer"
//           onClick={handleBack}
//         />
//         <h1 className="py-5 text-xl font bold opacity-90 ml-5">Healthy Me</h1>
//       </section>

//       <section>
//         <img
//           className="w-[100%] h-[15rem] object-cover"
//           src="/images/wallpaper.jpg"
//           alt=""
//         />
//       </section>

//       <section className="pl-6">
//         <div className="flex justify-between items-start mt-5 h-[5rem]">
//           <Avatar
//             className="trasnform -translate-y-24"
//             alt="healthy me"
//             src="/images/profile_Img1.jpg"
//             sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
//           />

//           {true ? (
//             <Button
//               onClick={handleOpenProfileModel}
//               variant="contained"
//               sx={{ borderRadius: "20px" }}
//             >
//               Edit Profile
//             </Button>
//           ) : (
//             <Button
//               onClick={handleFollowUser}
//               variant="contained"
//               sx={{ borderRadius: "20px" }}
//             >
//               {true?"Follow":"Unfollow"}
//             </Button>
//           )}
//         </div>
// <div>
// {/*<div className="flex items-center">
//     <h1 className="font-bold text-lg">Healthy Me</h1>
//     {true && (
//         <img className="ml-2 w-5 h-5"
//         src="" alt=""/>
//     )}
// </div>*/}

// <h1 className="text-gray-500">@healthyme</h1>
// </div>
   
//         <div className="mt-2 space-y-3">
//             <p>Welcome to TheHealthyMe! On this, we're dedicated to promoting a balanced and healthy lifestyle through nutritious meal routines and effective workout plans. Whether you're just starting your fitness journey or looking for new ways to maintain a healthy lifestyle, you've come to the right place.</p>
//         <div className="py-1 flex space-x-5">
//             <div className="flex items-center text-gray-500">
//                 <BusinessCenterIcon/>
//                 <p className="ml-2">Education</p>
//             </div>

//             <div className="flex items-center text-gray-500">
//                 <LocationOnIcon/>
//                 <p className="ml-2">Sri Lanka</p>
//             </div>

//             <div className="flex items-center text-gray-500">
//                 <CalendarMonthIcon/>
//                 <p className="ml-2">Joined Jun 2023</p>
//             </div>
//         </div>
//         <div className="flex items-center space-x-5">
//             <div className="flex items-center space-x-1 font-semibold">
//                 <span>190</span>
//                 <span className="text-gray-500">Following</span>

//             </div>

//             <div className="flex items-center space-x-1 font-semibold">
//                 <span>590</span>
//                 <span className="text-gray-500">Followers</span>

//             </div>

//         </div>
//         </div>
//       </section>


//       <section className="py-5">
//       <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={tabValue}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleTabChange} aria-label="lab API tabs example">
//             <Tab label="Media" value="1" />
//             <Tab label="Workout Status" value="2" />
//             <Tab label="Workout Plan" value="3" />
//             <Tab label="Meal Plan" value="4" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">{[1,1,1].map((item)=><Post/>)}
//         </TabPanel>
//         <TabPanel value="2">WorkoutStatus</TabPanel>
//         <TabPanel value="3"><WorkoutPlan /></TabPanel>
//         <TabPanel value="4"><MealPlan /></TabPanel>
//       </TabContext>
//     </Box>
//       </section>

//       <section>
//         <ProfileModal handleClose = {handleClose} open={openProfileModal}/>
//       </section>
//     </div>
//   );
// };

// export default Profile;


import React, { useState } from "react";
import Post from "../HomeSection/Post";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import ProfileModal from "./ProfileModal";
import WorkoutPlan from '../WorkoutPlan/WorkoutPlan';
import MealPlan from '../MealPlan/MealPlan';

const Profile = () => {
  const [tabValue, setTabValue] = useState("1");
  const [openProfileModal, setOpenProfileModal] = useState(false);
  
  const handleOpenProfileModel = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === "4") {
      console.log("likes post");
    } else if (newValue === "1") {
      console.log("users post");
    }
  };

  return (
    <div>
      <section className="py-5">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                <Tab label="Media" value="1" />
                <Tab label="Workout Status" value="2" />
                <Tab label="Workout Plan" value="3" />
                <Tab label="Meal Plan" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">{[1, 1, 1].map((item, index) => <Post key={index} />)}</TabPanel>
            <TabPanel value="2">WorkoutStatus</TabPanel>
            <TabPanel value="3"><WorkoutPlan /></TabPanel>
            <TabPanel value="4"><MealPlan /></TabPanel>
          </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal} />
      </section>
    </div>
  );
};

export default Profile;
