import React, { useContext } from 'react';
import './cartItem.css';
import {ShopContext} from '../../context/shopContext'
import remove_icon from '../assests/cart_cross_icon.png'


const CartItems =()=>{
    const {getTotalCartAmount,all_product,cartItems,remouvFromCart} =useContext(ShopContext);
    return(
        <div className='cartitems'>
            <div className='cartitem-format-main'>
                <p>PRODUCT</p>
                <p>TITLE</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>TOTAL</p>
                <p>REMOVE</p>
            </div>
            <hr/>
           {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className='cartitems-format cartitem-format-main'>
                    <img src={e.image} width={70} alt='' className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='carticon-remove-icon' src={remove_icon}onClick={()=>{remouvFromCart(e.id)}} alt=''/>
                </div>
                <hr/>
            </div>
            }
            return null;
           })}
           <div className='cartitem-down'>
            <div className='cartitem-total'>
                <h1>cart totals</h1>
                <div>
                    <div className='cartitem-total-item'>
                        <p>subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='cartitem-total-item'>
                        <p>shipping free</p>
                        <p>free</p>
                    </div>
                    <hr/>
                    <div  className='cartitem-total-item'>
                        <h3>total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>

                </div>
                <button>proceed to checkout</button>
            </div>
            <div className='cartitem-promocode'>
                <p>if you have a promo code ,enter it here</p>
                <div className='cartitem-promobox'>
                    <input type='text' placeholder='promo code'/>
                    <button>submit</button>
                </div>
            </div>
           </div>
        </div>
    )
}

export default CartItems ;