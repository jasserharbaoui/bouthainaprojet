import React from 'react'
import './newsLetter.css'

const NewsLetter =()=>{
    return(
        <div className='newsLetter'>
            <h1>get exclusive ofeers on your email</h1>
            <p>subscribe to your newlest and stay updated</p>
            <div>
                <input type='email' placeholder='your email id'/>
                <button>subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;