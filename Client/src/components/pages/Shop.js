import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPosts } from '../../slices/postSlice';
import Footer from '../Footer/Footer';
import PostCard from '../PostCard';
import './Shop.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const Shop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getPosts());
  }, [dispatch]);

  const updateState = () => {
    dispatch(getPosts())
  }
  const {loading, postList, errors} = useSelector((state) => state.post);

  return (
    <>
    
    <div className='shop_container'>
      {loading && <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>}
      {postList && postList.map(post => <PostCard updateState={() => updateState()} post={post}/>)}
  </div>
  <Footer />
  </>
  )
};


export default Shop;
