import React from 'react';
import './breadcrum.css';
import arrow_icon from '../assests/breadcrum_arrow.png'


const Breadcrum =(props)=>{
    const {product} = props;
    return(
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt=''/> Shop <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name}
        </div>
    )
}

export default Breadcrum ;