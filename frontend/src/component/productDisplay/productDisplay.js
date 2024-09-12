import React, { useContext } from 'react';
import './productDisplay.css'
import star_icon from "../assests/star_icon.png"
import star_dull_icon from "../assests/star_dull_icon.png"
import { ShopContext } from '../../context/shopContext';

const ProductDisplay =(props)=>{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} width={200} alt=''/>
                    <img src={product.image} width={200} alt=''/>
                    <img src={product.image} width={200} alt=''/>
                    <img src={product.image} width={200} alt=''/>
                </div>
                <div className='productdisplay-img'>
                     <img  className='productdisplay-main-img' src={product.image} width={200} alt=''/>
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_dull_icon} alt=''/>
                    <p>(122)</p>
                </div>
                
            
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
               Build an E-Commerce Website with MERN Stack (7 Part Series) Hello friends! So, I am 
                and this article is the first part
             
            </div>
            {/* <div className='productdisplay-right-size'>

            </div> */}
            <button onClick={()=>{addToCart(product.id)}}>add to cart</button>
          </div>
        </div>
    )
}

export default ProductDisplay ;