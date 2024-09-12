import React  from 'react'
import './addproduct.css';
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react';



const AddProduct = () =>{
    const [image , setImage]= useState(false);
    const[productDetail, setProductDetail] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
    })
    const imageHandler = (e)=>{
setImage(e.target.files[0]);
    }
  return(
    <div className='add-product'>
        <div className='addproduct-itemfield'>
            <p>product title</p>
            <input type='text' name='name' placeholder='type here'/>
        </div>
        <div className='addproduct-price'>
            <div className='addproduct-itemfield'>
                <p>price</p>
                <input type="text" name='old-price' placeholder='type here' />
            </div>
            <div className='addproduct-itemfield'>
                <p> offre price</p>
                <input type="text" name='new-price' placeholder='type here' />
            </div>
        </div>
        <div className='addproduct-itemfield'>
            <p>product category</p>
            <select name='category' className='add-product-selector'>
              <option value='women'>art1</option>
              <option value='men'>accesoir</option>
              <option value='kid'>art2</option>
            </select>
            <div className='addproduct-itemfield'>
                <label htmlFor='file-input'>
                    <img src={ image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt=''/>
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden/>
            </div>
            <button className='addproduct-btn'>add</button>

        </div>

    </div>
    
  )
}

export default AddProduct;
