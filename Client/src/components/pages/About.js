import React from 'react';
import './About.css';
import img4 from '../../assets/HeroShop/img4.jpg';
import img5 from '../../assets/HeroShop/img5.png';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';


const Training = () => {
    return (
        <>
        <div className='training'>
            <div className='left'>
                <h1>About Us</h1>
                <p>ESS E-sports is a leading esports organization,
                currently operating five teams under the Astralis brand, in  Rainbow Six Seige (R6), Valorant, and FIFA.</p>
                <Link to='/contact'><button className='ctnbtn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack bottom'>
                        <img src='https://www.gamereactor.eu/media/25/astralisarevictorious_1992503b.jpg' className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Training;
