import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {MdAlternateEmail} from 'react-icons/md';
import Footer from '../Footer/Footer';
import '../pages/Contact.css'


const Contact = () => {
  return (
      <>
    <section className='contactContainer'>
        <div className='contactcontent'>
            <h2 className='contactH2'>Get In Touch</h2>
            <p className='ContactPara'>Feel free to contact us</p>
        </div>
        <div className='contaContainer'>
            <div className='contactInfo'>
                <div className='contactBox'>
                    <div className='contaIcons'><FaMapMarkerAlt/></div>
                    <div className='contaText'>
                        <h3 className='contactH3'>Adress</h3>
                        <p className='ContactPara'>Avenue Mohamed-Karoui 4001 Sousse</p>
                    </div>
                </div>
                <div className='contactBox'>
                    <div className='contaIcons'><BsFillTelephoneFill/></div>
                    <div className='contaText'>
                        <h3 className='contactH3'>Phone</h3>
                        <p className='ContactPara'>216-11-11-11-11</p>
                    </div>
                </div>
                <div className='contactBox'>
                    <div className='contaIcons'><MdAlternateEmail/></div>
                    <div className='contaText'>
                        <h3 className='contactH3'>E-Mail</h3>
                        <p className='ContactPara'>ESSE-Sports@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='contactForm'>
                <form>
                    <h2 className='contactH2'>Send Message</h2>
                    <div className='contactInputBox'>
                        <input className='contactinput' type='text' name='' required='required'/>
                        <span className='contactspan'>Full Name</span>
                    </div>
                    <div className='contactInputBox'>
                        <input className='contactinput' type='text' name='' required='required'/>
                        <span className='contactspan'>Email</span>
                    </div>
                    <div className='contactInputBox'>
                        <textarea className='contacttextarea' required='required'></textarea>
                        <span className='contactspan'>Type your message ...</span>
                    </div>
                    <div className='contactInputBox'>
                        <input className='contactinput' type='submit' name='' value='Send'/>
                        
                    </div>
                </form>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Contact