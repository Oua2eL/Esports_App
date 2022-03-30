import  {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import postReducer from './slices/postSlice';
import cartReducer from './slices/cartSlice';



export default configureStore ({reducer: {user: userReducer, post: postReducer, cart: cartReducer} });
