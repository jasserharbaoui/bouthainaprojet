import React from "react";
import "./hero.css";
import hand_icon from '../assests/hand_icon.png'
import arrow_icon from '../assests/arrow.png'
import image_art from '../assests/ph15.jpg'

const Hero =()=>{
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>WELCOM TO MY ART</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt=""/>
                    </div>
                    <p>collection</p>
                    <p>for every one</p>
                </div>
                <div className="hero-latest-btn">
                    <div>latest collection</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            <div className="hero-right">
                <img src={image_art}  width={300} alt=""/>
            </div>

        </div>
    )
}

export default Hero;