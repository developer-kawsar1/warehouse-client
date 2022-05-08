import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'
const Products = () => { 
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://enigmatic-lowlands-82160.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <> 

           <div> 
               <br /> <br />
             <h3 className='section-title'>Products</h3> 

              <div className="product-container">
              {
                products.slice(0, 6).map(product=><Product key={product._id} product={product} />)
            }
              </div> 

              <div className='more-btn-div'> 
                  <Link to="/manage">manage inventory</Link>
              </div>
        </div></>
    );
};

export default Products;