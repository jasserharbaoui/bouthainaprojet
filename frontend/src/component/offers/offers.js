import React from 'react';
import './offres.css';
import exclusive_image from '../assests/ph26.jpg'

const Offers =()=>{
    return(
        <div className='offers'>
            <div className='offers-left'>
                <h1>exclusive</h1>
                <h1>offres for you</h1>
                <p>only in best products</p>
                <button>chek now</button>
            </div>
            <div className='offers-right'>
                <img src={exclusive_image} width={250} alt=''/>
            </div>
        </div>
    )
}

export default Offers;