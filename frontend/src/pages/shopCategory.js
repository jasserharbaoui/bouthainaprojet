import React, { useContext } from "react";
import './css/shopCategory.css'
import { ShopContext } from "../context/shopContext";
import drop_icon from '../component/assests/dropdown_icon.png'
import Item from "../component/items/item";

const ShopCatrgory =(props)=>{

    const {all_product} = useContext(ShopContext)
    return(
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} width={400}  alt=""/>
            <div className="shopcategory-indexSort">
                <p>
                    <span>showing my art</span> out of 36 product
                </p>
                <div className="shopcategory-sort">
                    sort by <img src={drop_icon} alt=""/>

                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if(props.category === item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}

            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
        
        
    )
}


export default ShopCatrgory;