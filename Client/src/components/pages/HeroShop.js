import React from 'react';
import { Link } from 'react-router-dom';
import './HeroShop.css';
import img1 from '../../assets/HeroShop/img1.jpg';
import img2 from '../../assets/HeroShop/img2.png';
import img3 from '../../assets/HeroShop/img3.jpg';
import img4 from '../../assets/HeroShop/img4.jpg';
import img5 from '../../assets/HeroShop/img5.png';



const HeroShop = () => {
  return (
    <div>
            <div className='featured'>
            <h1 className='featured-text'>Check-Out Our Teams Products</h1>
            <div className='container'>
                <img className='span-3 image-grid-row-2'  src={img1} alt=''  />
                <img src={img2} alt='' />
                <img src={img3} alt='' />
                <img src={img4} alt='' />
                <img src={img5} alt='' />
                <div className='span-2 right-img-details'>
                    <p>Keep in mind that u need to create and account in order to buy a product</p>
                    <Link to='/shop'>
                    <button className='Shop_btn'>Shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default HeroShop;
