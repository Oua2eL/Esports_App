import React from 'react';
import './PostCard.css';
import { deletePost } from '../slices/postSlice';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import {useNavigate} from 'react-router-dom';

const PostCard = (props) => {
  const { isAuth, role } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect (() => {
  //   dispatch(deletePost());
  // }, [dispatch]);
  const check = role == "admin" ? true : false

  const deleteClick = () => {
    dispatch(deletePost(props.post._id))
    props.updateState()
}

const handleAddToCart = () => {
    dispatch(addToCart(props.post));
    navigate('/shoppingcart');
};

  return (
    <div className='shop_section'>
      <div className='shop_wrapper'>
        <div className='cart'>
          <div className='imgBx'>
            <img src={props.post.image} />
          </div>
          <div className='contentBx'>
            <h3>{props.post.title}</h3>
            <h2 className='price'>{props.post.price} DT</h2>
            <button className='buy' onClick={()=>handleAddToCart(props.post)}>Add to cart</button>
            {check ? <a href='#' className='buy' onClick={() => deleteClick()}>DELETE</a> : <></>}
            
          </div>
        </div>
      </div>
    </div>
  )
};

export default PostCard;
