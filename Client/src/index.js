import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';
import postReducer from './slices/postSlice';
import {ToastContainer} from 'react-toastify';
import axios from "axios";

axios.defaults.baseURL = 'https://ess-esports.herokuapp.com';

ReactDOM.render(
    <BrowserRouter>
    <ToastContainer />
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
    );
