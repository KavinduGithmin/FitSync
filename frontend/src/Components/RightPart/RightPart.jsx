import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const RightPart = () => {
  const handleChangeTheme = () => {
    console.log("handle change theme");
  };
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <Brightness4Icon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>
{/*
      <section className="my-5">
        <h1 className="text-x1 font bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new features </h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20", borderRadius: "25px" }}
        >
          Get Verified
        </Button>
      </section>
  */}

      {/*<section className="mt-7 space-y-5">*/}
      <section className="mt-7 space-y-5">
      
        <h1 className="font-bold text-x1 py-1">what's happening</h1>

        <div>
          <p className="text-sm"> Daily Routing </p>

          <p className="font-bold">Sachi's Vlog</p>
        </div>
        {[1,1,1].map((item)=><div className="flex justfy-between w-full">
          <div>
            <p> Entertainment-Trending </p>
            <p className="font-bold"> #healthy life</p>
            <p className="text-sm"> Daily Routing </p>
            <p>34.5k views</p>
          </div>
          <MoreHorizIcon />
        </div>)
}
      </section>
      
      
    </div>
  );
};

export default RightPart;
