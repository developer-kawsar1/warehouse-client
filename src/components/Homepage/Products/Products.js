import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'
const Products = () => { 
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <> 

           <div>
             <h3 className='services-title'>LESSONS</h3> 

              <div className="product-container">
              {
                products.map(product=><Product key={product._id} product={product} />)
            }
              </div> 

              <div className='more-btn-div'> 
                  <Link to="/manage">manage inventory</Link>
              </div>
        </div></>
    );
};

export default Products;