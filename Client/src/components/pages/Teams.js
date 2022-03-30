import React from 'react';
import '../pages/Teams.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import teamr6 from '../../../src/assets/HeroTeams/teamr6.jpeg';
import teamvalorant from '../../../src/assets/HeroTeams/teamvalorant.jpg';
import teamfifa from '../../../src/assets/HeroTeams/teamfifa.jpg';

function Teams() {
  return (
    <>
            <div className='Shopcontainer'>
            <h1>Teams Menu</h1>
            <div className='Shop2container'>
            <Link to='/r6players'>
                <img className='r6cart' src={teamr6} alt='' /></Link>
                <Link to='/valorantplayers'>
                <img className='valorantcart' src={teamvalorant} alt='' /></Link>
                <Link to='/fifaplayers'>
                <img className='fifacart' src={teamfifa} alt='' /> </Link>
                </div>
      </div>
      <Footer />
      </>
  );
}
export default Teams;