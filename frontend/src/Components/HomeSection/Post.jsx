import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat'
import { Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteOutlined } from '@mui/icons-material';
import CommentModal from './CommentModal';
import { useState } from 'react';

const Post = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [openCommentModal,setOpenCommentModal]=useState(false);
    const handleOpenCommentModel = () => setOpenCommentModal(true);
    const handleCloseCommentModal = () => setOpenCommentModal(false);
  

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleDeletePost=()=>{
        console.log("delete post")
    };
    
    const handleCreateRetweet=()=>{
        console.log("handle create retweet")
    };
    const handleLiketweet=()=>{
        console.log("handle like")
    }
  return (
    <React.Fragment>
        {/*<div className='flex items-center font-semibold text-gray-700 py-2'>
            <RepeatIcon/>
            <p>You Retweet</p>
  </div>*/}
      <div className='flex space-x-5'>
        <Avatar 
        onClick={()=>navigate(`/profile/${6}`)}
        className='cursor-pointer'
        alt = "username" src = "/images/profile_Img1.jpg"
        />
        <div className='w-full'>
            <div className='flex jsutify-between items-center'>
                <div className='flex cursor-pointer items-center space-x-2'>
                    <span className='font-semibold'> Healthy Me</span>
                    
                    <span className='text-gray-600'>@healthyme . 2m</span>
                    {/*<img className='ml-2 w-5 h-5' src='/images/verify.png'/>*/}
                </div>
                <div>
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
            <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
            <MenuItem onClick={handleDeletePost}>Edit</MenuItem>
          </Menu>
                </div>

                </div>

                <div className='mt-2'>
                    <div onClick={()=>navigate(`/post/${3}`)} className='cursor-pointer'>
                    <p className='mb-2 p-0'> react spring boot project</p>
                   <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src="/images/Heath_Master.jpg" alt=""/>
                    </div>
                    <div className='py-5 flex flex-wrap justify-between items-center'>
                        <div className='space-x-3 flex items-center text-gray-600'>
                            <ChatBubbleOutlineIcon className='cursor-pointer' onClick = {handleOpenCommentModel}/>
                        <p>43</p>
                        </div>
                            <div className={`${true? "text-pink-600":"text-gray-600"}space-x-3 flex items-center`}>
                                <RepeatIcon className='cursor-pointer' onClick = {handleCreateRetweet}/>
                            <p>54</p>
                            </div>

                            <div className={`${true? "text-pink-600":"text-gray-600"}space-x-3 flex items-center`}>
                                {true?<FavoriteIcon className='cursor-pointer' onClick = {handleLiketweet}/>:<FavoriteOutlined onClick={handleLiketweet} className='cursor-pointer'/>}
                            <p>54</p>
                            </div>

                            <div className='space-x-3 flex items-center text-gray-600'>
                            <BarChartIcon className='cursor-pointer' onClick = {handleOpenCommentModel}/>
                        <p>430</p>
                        </div>
                        <div className='space-x-3 flex items-center text-gray-600'>
                            <FileUploadIcon className='cursor-pointer' onClick = {handleOpenCommentModel}/>
                        <p>43</p>
                        </div>
                    </div>

                </div>

            
        </div>
      </div>
      <section>
        <CommentModal open={openCommentModal} handleClose={handleCloseCommentModal}/>
      </section>
    </React.Fragment>
  )
}

export default Post
