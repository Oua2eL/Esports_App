import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

//Register action
export const registerUser = createAsyncThunk('user/regitser', async(info,{rejectWithValue}) =>{
    try {
        const {data} = await axios.post('http://localhost:5000/api/person/register',info.data);
        info.navigate('/login');
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg);
    };
})
//Login action
export const loginUser = createAsyncThunk('user/loginUser', async(info,{rejectWithValue}) =>{
    try {
        const {data} = await axios.post('http://localhost:5000/api/person/login',info.data);
        data.role ==='user' ? info.navigate('/profile') : data.role ==='admin' && info.navigate('/dashboard');
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg);
    };
})

//load User info
export const loadUserInfo = createAsyncThunk('user/loadUserInfo', async(info,{rejectWithValue}) =>{
    try {
        const {data} = await axios.get('http://localhost:5000/api/person/personInfo',{
            headers:{
                token: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg);
    };
})

//update profile picture
export const updateProfilePicture = createAsyncThunk('user/updateProfilePicture', 
async(file,{rejectWithValue,dispatch}) =>{
    try {
        const fromPic = new FormData ();
        fromPic.append('profilePicture', file);
        const {data} = await axios.put('http://localhost:5000/api/person/profilePic',fromPic,{
            headers:{
                token: localStorage.getItem('token'),
            }
        });
        return dispatch(loadUserInfo());
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg);
    };
})


const userSlice = createSlice({
    name:'user',
    initialState:{
        userInfo:{},
        token:localStorage.getItem('token') || null,
        isAuth:Boolean(localStorage.getItem('isAuth')) || false,
        errors:null,
        msg: 'wlc',
        role:localStorage.getItem('role') || '',
    },

    reducers: {
        logout: (state) => {
            state.token = null;
            state.isAuth = false;
            state.role = '';
            localStorage.removeItem('isAuth');
            localStorage.removeItem('role');
            localStorage.removeItem('token');
        },
    },

    extraReducers: {
        [registerUser.fulfilled]: (state, action) => {
            state.msg = action.payload.msg;
        },
        [registerUser.rejected]: (state, action) => {
            state.errors = action.payload;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isAuth = true;
            localStorage.setItem('isAuth', true);
            state.token = action.payload.token;
            state.role = action.payload.role;
            localStorage.setItem('role',action.payload.role);
            localStorage.setItem('token',action.payload.token);
        },
        [loginUser.rejected]: (state, action) => {
            state.errors = action.payload;
    },
    // load user info
    [loadUserInfo.fulfilled]:(state,action)=>{
        state.userInfo = action.payload
    },
    [loadUserInfo.rejected]: (state, action) => {
        state.errors = action.payload;
},
    },
});

export default userSlice.reducer;

export const {logout} = userSlice.actions;