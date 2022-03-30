import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import { loginUser } from '../../slices/userSlice';
import {useNavigate} from 'react-router-dom';
import '../pages/Login.css';
import Footer from '../Footer/Footer';

const Login = () => {
    const dispatch = useDispatch ();
    const navigate = useNavigate ();
    const {errors:userError, isAuth, role} = useSelector(state=>state.user);
    useEffect(()=>{
        if(isAuth && role==='user') navigate ('/profile')
        else if(isAuth && role==='admin') navigate ('/dashboard')
    },[]);
    const {register:logininfo, handleSubmit, formState: {errors}} = useForm();
    const userInfo = (data) => {
        dispatch(loginUser({data,navigate}));
    };
    return (
        <>
        <div className='login_container'>
            <form className='login-box' onSubmit={handleSubmit(userInfo)}>
                <h1>Login</h1>
                <div className='logintextbox'>
                <i class="fas fa-user"></i>
                <input type='text' placeholder="E-mail" {...logininfo("email", {required: true, pattern:{
                    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message:'invalid email',
                },
                })} />
                {errors.email?.message}
                </div>
                <br />
                <div className='logintextbox'>
                <i class="fas fa-lock"></i>
                
                <input type='password' placeholder="Password" {...logininfo("password", {required: true, 
                minLength:{
                    value:6,
                    message:'Password needs to be 6 characters or more',
                },
                })}  />
                {errors.password?.message}
                </div>
                <br />
                {userError && userError}
                <button className='loginbtn'>Log In</button>
            </form>
        </div>
        <Footer />
        </>
    );
};

export default Login;