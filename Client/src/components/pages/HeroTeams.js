import React from 'react';
import './HeroTeams.css';
import {Link} from 'react-router-dom';

const HeroTeams = () => {
  return (
    <div className='Herot_container'>
    <div className='Herot_section'>
      <h1>Discover our Esports teams</h1> <br />
      <Link to='/teams'>
      <button className='Herot_btn'>Find More</button></Link>
      </div>
    </div>
  );
};

export default HeroTeams;