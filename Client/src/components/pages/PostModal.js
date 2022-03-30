import React from 'react'
import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap'
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {addNewPost} from '../../slices/postSlice'
import '../pages/PostModal.css'

function PostModal() {
    const dispatch = useDispatch();
    //show and hide the modal
   function actionToggle(){
     const action = document.querySelector('.action');
     action.classList.toggle('active')
   };
   
    const {register, handleSubmit} = useForm()
    const addPost = (data) => {
        console.log(data)
        dispatch(addNewPost(data))
        
    }
  
    return (
      <>
          
          <form  onSubmit={handleSubmit(addPost)}>
              
              <input type='text' placeholder='Title' {...register('title')}/><br/>
              <input type='text' placeholder='Image'{...register('image')}/><br/>
              <input type='text' placeholder='Price'{...register('price')}/><br/>
              <input type='text' placeholder='Quantity' {...register('quantity')}/><br/>
              <button type='submit' className='submitbtn' onSubmit={handleSubmit(addPost)} >Add Product</button>
          </form>
          
      </>
    );
  }
  
export default PostModal;