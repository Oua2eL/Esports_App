import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import '../HeroSection/HeroSection.css';
import HeroShop from '../pages/HeroShop';
import HeroTeams from '../pages/HeroTeams';

function HeroSection() {
  return (
    <div>
    <div className='hero-container'>
      <video src='/videos/Herobg.mp4' autoPlay loop muted />
      <h1>Welcome To Our World</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
    <HeroShop />
    <HeroTeams />
    </div>
    
  );
}

export default HeroSection;
