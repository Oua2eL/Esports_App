import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

//Get Posts
export const getPosts = createAsyncThunk(
    'post/getPosts', 
    async(info,{rejectWithValue}) =>{
    try {
        const {data} = await axios.get('http://localhost:5000/api/post',{
            headers:{
            token: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg);
    };
}
);

//Add Post

export const addNewPost = createAsyncThunk(
    'post/addPost', 
    async(postInfo,{rejectWithValue, dispatch}) =>{
    try {
        const {data} = await axios.post('http://localhost:5000/api/post',postInfo,{
            headers:{
            token: localStorage.getItem('token'),
            },
        });
        dispatch(getPosts())
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg);
    };
}
);

//Delete Post

export const deletePost = createAsyncThunk(
    'post/addPost', 
    async(_id,{rejectWithValue, dispatch}) =>{
    try {
        const {data} = await axios.delete('http://localhost:5000/api/post',{data:{_id}});
        dispatch(getPosts())
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg);
    };
}
);


const postSlice = createSlice({
    name:'post',
    initialState:{
        loading: false,
        postList: [],
        errors:null,
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.loading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.postList = action.payload;
            state.errors = null;
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        },
},
});

export default postSlice.reducer;