import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import {useParams} from 'react-router-dom'
import Breadcrum from '../component/breadcrums/breadcrum';
import ProductDisplay from '../component/productDisplay/productDisplay';

const Product =()=>{
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
    return(
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
        </div>
    )
}


export default Product;