// import React from "react";
// import { navigationMenu } from "./NavigationMenu";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// const Navigation = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const navigate = useNavigate();
//   const handleLogout=()=>{
//     console.log("logout")
//     handleClose()
//   }
//   return (
//     <div className="h-screen sticky top-0">
//       <div>
//         <div className="py-5">
//           <span
//             style={{
//               fontSize: "32px",
//               marginLeft: "15px",
//               fontWeight: "bold",
//               marginRight: "40px",
//               cursor: "pointer",
//             }}
//           >
//             FitSync
//           </span>
//         </div>
//         <div className="space-y-6">
//           {navigationMenu.map((item) => (
//             <div
//               className="cursor-pointer flex space-x-3
//                 items-center"
//               onClick={() =>
//                 item.title === "Profile"
//                   ? navigate(`/profile/${5}`)
//                   : navigate(item.path)
//               }
//             >
//               {item.icon}
//               <p className="text-x1">{item.title}</p>
//             </div>
//           ))}
//         </div>
//         <div className="py-10">
//           <Button
//             sx={{
//               width: "100%",
//               borderRadius: "29px",
//               py: "15px",
//               bgcolor: "#1e88e5",
//             }}
//             variant="contained"
//           >
//             Post
//           </Button>
//         </div>
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           <Avatar alt="username" src="/images/profile_Img1.jpg" />
//           <div>
//             <span style={{ display: "block" }}>Healthy Me</span>
//             <span style={{ display: "block" }} className="opacity-70">
//               @healthyme
//             </span>
//           </div>

//           <Button
//             id="basic-button"
//             aria-controls={open ? "basic-menu" : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? "true" : undefined}
//             onClick={handleClick}
//           >
//             <MoreHorizIcon />
//           </Button>
//           <Menu
//             id="basic-menu"
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             MenuListProps={{
//               "aria-labelledby": "basic-button",
//             }}
//           >
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
            
//           </Menu>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Navigation;


import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleLogout=()=>{
    console.log("logout")
    handleClose()
  };
  
  // Filter out the menu items to remove unwanted sections
  const filteredMenu = navigationMenu.filter(item => !["Explore", "Notifications", "Messages", "Lists", "Communities", "Verified", "More"].includes(item.title));
  
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <span
            style={{
              fontSize: "32px",
              marginLeft: "15px",
              fontWeight: "bold",
              marginRight: "40px",
              cursor: "pointer",
            }}
          >
            FitSync
          </span>
        </div>
        <div className="space-y-6">
          {filteredMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3
                items-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-x1">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Post
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar alt="username" src="/images/profile_Img1.jpg" />
          <div>
            <span style={{ display: "block" }}>Healthy Me</span>
            <span style={{ display: "block" }} className="opacity-70">
              @healthyme
            </span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            
          </Menu>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
