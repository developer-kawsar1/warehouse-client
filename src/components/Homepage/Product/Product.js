import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; 
import './Product.css'

const Product = ({product}) => {  
    const navigate=useNavigate()
    const {_id,name,price,description,img ,supplier}=product
    return (
        <div className='product'>
        <h2>{name}</h2> 
        <img src={img} alt="" /> 
          <p>{description}</p>  
            <br />
           <p className='supplier'><b>supplier : {supplier}</b></p>
          <div className='cart-footer'>
              <p>${price}</p>
              <button onClick={()=>navigate('./inventory/'+_id)}>Update </button>
          </div>
    </div>
    );
};

export default Product;