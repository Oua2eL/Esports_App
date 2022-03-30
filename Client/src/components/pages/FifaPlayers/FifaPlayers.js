import React from 'react';
import './FifaPlayers.css';
import {RiTeamLine} from 'react-icons/ri';
import {AiOutlineTrophy} from 'react-icons/ai';
import {GiBackwardTime} from 'react-icons/gi';

const FifaPlayers = () => {
    return (
        <div className='fifa_container'>
        <div className='fifa_coverpage'>
        <h1>Team FIFA</h1> <br />
        </div>
        <div className='counter-up'>
             <div className='box_content'>
        <div className='boxstats'>
             <div className='stats-icon'>
                  <RiTeamLine/>
                  <div className='box_counter'>2</div>
                  <div className='box_text'>Members</div>
             </div>
        </div>
        <div className='boxstats'>
             <div className='stats-icon'>
                  <AiOutlineTrophy/>
                  <div className='box_counter'>1</div>
                  <div className='box_text'>Trophies</div>
             </div>
        </div>
        <div className='boxstats'>
             <div className='stats-icon'>
                  <GiBackwardTime/>
                  <div className='box_counter'>6</div>
                  <div className='box_text'>Competition</div>
             </div>
             </div>
             </div>
        </div>
        <div className='cardSection'>
        <div className='playercard'>
             <div className='imgbox'>
                  <img src='https://pbs.twimg.com/media/ENxasjhXkAIWUOk.jpg' />
                  <img src='https://www.dexerto.com/wp-content/uploads/2021/04/23/dev1ce-leaves-astralis-nip.jpg' />
             </div>
                  <div className='playerdetails'>
                       <h1 className='playerName'>Cristian Astro</h1>
                       <h2 className='playerId'>"G1xtch"</h2>
                       <h2 className='playerJoin'>Member since 2022</h2>
                  </div>
        </div>
        <div className='playercard'>
             <div className='imgbox'>
                  <img src='https://img-cdn.hltv.org/playerbodyshot/u6ErxtCOfuuX1pYQnG-oyE.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=136%2C12%2C455%2C455&w=800&s=fa6a3295d4fb24d0a546c37393b5ffa6' />
                  <img src='https://cdn1.dotesports.com/wp-content/uploads/2022/01/24085941/Lucky-Astralis-scaled.jpg' />
             </div>
                  <div className='playerdetails'>
                       <h1>David Henry</h1>
                       <h2>"Skillz08"</h2>
                       <h2>Member since 2022</h2>
                  </div>
        </div>
        </div>
   </div>
 )
}
  export default FifaPlayers;
  
