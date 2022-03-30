import React from 'react';
import './RainbowPlayers.css';
import {RiTeamLine} from 'react-icons/ri';
import {AiOutlineTrophy} from 'react-icons/ai';
import {GiBackwardTime} from 'react-icons/gi';

const RainbowPlayers = () => {
  return (
    <div className='R6_container'>
         <div className='R6_coverpage'>
         <h1>Team Rainbow 6 Siege</h1> <br />
         </div>
         <div className='counter-up'>
              <div className='box_content'>
         <div className='boxstats'>
              <div className='stats-icon'>
                   <RiTeamLine/>
                   <div className='box_counter'>4</div>
                   <div className='box_text'>Members</div>
              </div>
         </div>
         <div className='boxstats'>
              <div className='stats-icon'>
                   <AiOutlineTrophy/>
                   <div className='box_counter'>11</div>
                   <div className='box_text'>Trophies</div>
              </div>
         </div>
         <div className='boxstats'>
              <div className='stats-icon'>
                   <GiBackwardTime/>
                   <div className='box_counter'>35</div>
                   <div className='box_text'>Competition</div>
              </div>
              </div>
              </div>
         </div>
         <div className='cardSection'>
         <div className='playercard'>
              <div className='imgbox'>
                   <img src='https://cdn11.bigcommerce.com/s-4l2ozbqo0w/products/2030/images/2356/GLA1VE350px__03159.1612791054.386.513.jpg?c=2' />
                   <img src='https://www.esportzy.com/uploads/blog/img_60faa6121df903-28582431-90735265.jpg' />
              </div>
                   <div className='playerdetails'>
                        <h1 className='playerName'>Lukas Egholm</h1>
                        <h2 className='playerId'>"gia1ve"</h2>
                        <h2 className='playerRatio'>1.5 K/D</h2>
                        <h2 className='playerJoin'>Member since 2020</h2>
                   </div>
         </div>
         <div className='playercard'>
              <div className='imgbox'>
                   <img src='https://img-cdn.hltv.org/playerbodyshot/LTjaa9PMPamQVowIWm9FGH.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=121%2C4%2C467%2C467&w=800&s=6efa815f01e41aea057088384a8887c7' />
                   <img src='https://cdn1.dotesports.com/wp-content/uploads/2019/10/11110159/k0nfig.jpg' />
              </div>
                   <div className='playerdetails'>
                        <h1>Kristian Wienecke</h1>
                        <h2>"k0nfig"</h2>
                        <h2>1.8 K/D</h2>
                        <h2>Member since 2021</h2>
                   </div>
         </div>
         <div className='playercard'>
              <div className='imgbox'>
                   <img src='https://pbs.twimg.com/profile_images/1465054744163008520/-SBOIxac_400x400.jpg' />
                   <img src='https://e.sport.fr/wp-content/uploads/2021/11/blameF-Complexity.jpg' />
              </div>
                   <div className='playerdetails'>
                        <h1>Benjamin Bremer</h1>
                        <h2>"blameF"</h2>
                        <h2>1.0 K/D</h2>
                        <h2>Member since 2022</h2>
                   </div>
         </div>
         <div className='playercard'>
              <div className='imgbox'>
                   <img src='https://www.heavybullets.com/wp-content/uploads/2020/01/Xyp9x.jpeg' />
                   <img src='https://cybersport.pl/wp-content/uploads/2021/07/xyp9x-astralis-cologne-21.jpg' />
              </div>
                   <div className='playerdetails'>
                        <h1>Andreas Højsleth</h1>
                        <h2>"Xyp9x"</h2>
                        <h2>2.0 K/D</h2>
                        <h2>Member since 2020</h2>
                   </div>
         </div>
         </div>
    </div>
  )
}

export default RainbowPlayers;
