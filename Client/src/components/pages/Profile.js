import React, { useState } from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loadUserInfo, updateProfilePicture } from '../../slices/userSlice';
import'./Profile.css';
import Footer from '../Footer/Footer';


const Profile = () => {
  const dispatch = useDispatch();
  const [file,setFile] = useState({});
  const{profilePic, username, email} = useSelector(state=>state.user.userInfo);
  useEffect (() =>{
    dispatch(loadUserInfo ())
  }, [dispatch]);
  const handleImageUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProfilePicture(file));
  };
  return (
    <>
    <div className='Profile_container'>
      <img className='profile_photo' src={profilePic} alt=''/> <br />
      <div className='profile_btn'>
      <input type='file'onChange={(e)=>setFile(e.target.files[0])} />
      <button onClick={handleImageUpdate}>Update</button>
      </div>
      <p className='profile_username'>Welcome {username}</p>
      <p className='profile_email'>{email}</p>
    </div>
    <Footer />
    </>
  )
};

export default Profile;