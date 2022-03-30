import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import { registerUser } from '../../slices/userSlice';
import {Link, useNavigate} from 'react-router-dom';
import '../pages/Register.css';
import Footer from '../Footer/Footer';

const Register = () => {
    const dispatch = useDispatch ();
    const navigate = useNavigate ();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {errors:userError} = useSelector(state=>state.user);
    const userInfo = (data) => {
        dispatch(registerUser({data,navigate}));
    };
    return (
        <>
        <div className='register_container'>
            <form className='register-box' onSubmit={handleSubmit(userInfo)}>
                <h1>Register</h1>
                <div className='registertextbox'>
                <i class="fas fa-user"></i>
                <input type='text' placeholder='Username' {...register("username", {required: true})}  /> 
                </div>
                <br />
                <div className='registertextbox'>
                <i class="fas fa-at"></i>
                <input type='text' placeholder='E-mail' {...register("email", {required: true, pattern:{
                    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message:'invalid email',
                },
                })} />
                {errors.email?.message}
                </div>
                <br />
                <div className='registertextbox'>
                <i class="fas fa-lock"></i>
                <input type='password' placeholder='Password' {...register("password", {required: true, 
                minLength:{
                    value:6,
                    message:'Password needs to be 6 characters or more',
                },
                })}  />
                {errors.password?.message}
                </div>
                <br />
                {userError && userError}
                <button className='registerbtn'>Register</button> <p>already have an account ?</p> <button className='registerlogbtn'><Link className='registerlogbtnlink' to='/login'>Login</Link></button>
            </form>
        </div>
        <Footer />
        </>
    );
};

export default Register;