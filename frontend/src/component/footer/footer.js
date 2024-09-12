import React from 'react';
import './footer.css';
import footer_logo from '../assests/logo.jpg';
import insta_logo from '../assests/instagram_icon.png';
import pint_logo from '../assests/pintester_icon.png';
import whats_logo from '../assests/whatsapp_icon.png';

const Footer =()=>{
    return(
        <div className='footer'>
         <div className='footer-logo'>
            <img src={footer_logo} width={120} alt=''/>
            <p>LOULITTA</p>
         </div>
         <ul className='footer-links'>
            <li>company</li>
            <li>product</li>
            <li>offices</li>
            <li>about</li>
            <li>contact</li>
         </ul>
         <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={insta_logo} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src={pint_logo} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src={whats_logo} alt=''/>
            </div>
         </div>
         <div className='footer-copyright'>
            <hr/>
            <p>copy ffghjk ffghjyr zscgj vggdq </p>
         </div>
        </div>
    )
}

export default Footer;