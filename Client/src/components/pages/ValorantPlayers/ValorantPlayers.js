import React from 'react';
import './ValorantPlayers.css';
import {RiTeamLine} from 'react-icons/ri';
import {AiOutlineTrophy} from 'react-icons/ai';
import {GiBackwardTime} from 'react-icons/gi';


const ValorantPlayers = () => {
  return (
    <div className='valo_container'>
         <div className='valo_coverpage'>
         <h1>Team Valorant</h1> <br />
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
                   <div className='box_counter'>2</div>
                   <div className='box_text'>Trophies</div>
              </div>
         </div>
         <div className='boxstats'>
              <div className='stats-icon'>
                   <GiBackwardTime/>
                   <div className='box_counter'>18</div>
                   <div className='box_text'>Competition</div>
              </div>
              </div>
              </div>
         </div>
         <div className='cardSection'>
         <div className='playercard'>
              <div className='imgbox'>
                   <img src='https://www.bestgamingsettings.com/wp-content/uploads/2020/02/Magisk.jpg' />
                   <img src='https://gaimer.net/wp-content/uploads/2020/02/magisk-1000x600.jpg' />
              </div>
                   <div className='playerdetails'>
                        <h1 className='playerName'>Emil Reif</h1>
                        <h2 className='playerId'>"Magisk"</h2>
                        <h2 className='playerRatio'>1.3 K/D</h2>
                        <h2 className='playerJoin'>Member since 2022</h2>
                   </div>
         </div>
         <div className='playercard'>
              <div className='imgbox'>
                   <img src='https://www.heavybullets.com/wp-content/uploads/2020/01/Dupreeh-CS-GO.jpeg' />
                   <img src='https://gaimer.net/wp-content/uploads/2019/09/dupreeh.jpg' />
              </div>
                   <div className='playerdetails'>
                        <h1>Peter Rasmussen</h1>
                        <h2>"Dupreeh"</h2>
                        <h2>2.5 K/D</h2>
                        <h2>Member since 2021</h2>
                   </div>
         </div>
         <div className='playercard'>
              <div className='imgbox'>
                   <img src='https://resource.logitechg.com/w_490,ar_1:1,c_fill,g_face,q_auto:best,f_auto,b_rgb:676767,dpr_auto/content/dam/gaming/en/esports/players/device_big_unibet.png?v=1' />
                   <img src='https://cdn1.dotesports.com/wp-content/uploads/2019/05/09112621/BLASTMiami-Kirill_Photos-0442-768x512.jpg' />
              </div>
                   <div className='playerdetails'>
                        <h1>Nicolai Hvilshøj</h1>
                        <h2>"dev1ce"</h2>
                        <h2>2.0 K/D</h2>
                        <h2>Member since 2022</h2>
                   </div>
         </div>
         <div className='playercard'>
              <div className='imgbox'>
                   <img src='https://assets.esport.dk/assets/media/1623' />
                   <img src='https://cybersport.pl/wp-content/uploads/2020/10/es3tag_astralis-730x380.jpg' />
              </div>
                   <div className='playerdetails'>
                        <h1>Frank Leo</h1>
                        <h2>"XoD12"</h2>
                        <h2>1.6 K/D</h2>
                        <h2>Member since 2022</h2>
                   </div>
         </div>
         </div>
    </div>
  )
}
export default ValorantPlayers
