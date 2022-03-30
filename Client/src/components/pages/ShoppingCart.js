import React, {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import './ShoppingCart.css';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../slices/cartSlice';
import { PayPalButton } from "react-paypal-button-v2";


const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch ();

  useEffect(() =>{
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  }
  const { isAuth, role } = useSelector((state) => state.user);
  return (
    <>
    <div className='shoppingcart-container'>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className='shoppingcart-empty'>
          <p>Your Shopping Cart is currently empty</p>
          <div className='start-shopping'>
            <Link to='/shop'> 
            <BsFillArrowLeftCircleFill className='arrow'/>
            <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ): (<div>
        <div className='shopping-titles'>
          <h3 className='product-title'>Product</h3>
          <h3 className='product-price'>Price</h3>
          <h3 className='product-quantity'>Quantity</h3>
          <h3 className='product-total'>Total</h3>
        </div>
        <div className='shoppingcart-items'>
          {cart.cartItems?.map(cartItem =>(
            <div className='shoppingcart-item' key = {cartItem._id}>
              <div className='shoppingcart-product'>
                <img src={cartItem.image} alt={cartItem.title} />
                <div>
                  <h3>{cartItem.title}</h3>
                  <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                </div>
              </div>
              <div className='shoppingcart-product-price'> {cartItem.price} DT</div>
              <div className='shoppingcart-product-quantity'>
                <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                <div className='count'>{cartItem.cartQuantity}</div>
                <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
              </div>
              <div className='shoppingcart-product-total-price'>
               {cartItem.price * cartItem.cartQuantity} DT
              </div>
            </div>
          ))}
        </div>
        <div className='shoppingcart-summary'>
          <button className='clear-shoppingcart' onClick={() => handleClearCart()}>Clear Cart</button>
          <div className='shoppingcart-checkout'>
            <div className='subtotal'>
              <span>Subtotal</span>
              <span className='amount'> {cart.cartTotalAmount} DT</span>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <div>
            {isAuth && <PayPalButton
                    options={{
                      clientId: 
                      "AeZfcT9fsEUodUBQLFOiWbsqEDaaWRgnXeZD4crj1UwKMTOnwP01GKHbKchDMOcSjbhuvhAj38L0k0kn",
                      currency: 'USD',
                    }}
        amount="0.01"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          console.log({details, data});
        }}
      />}
      </div>
            <div className='continue-shopping'>
            <Link to='/shop'> 
            <BsFillArrowLeftCircleFill className='arrow'/>
            <span>Continue Shopping</span>
            </Link>
          </div>
          </div>
        </div>
      </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default ShoppingCart;
