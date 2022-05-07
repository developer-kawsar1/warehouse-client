import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {  
    const [product,setProduct]=useState({})  
    const {id}=useParams()
    useEffect(()=>{
        const url=`http://localhost:5000/product/${id}`  ;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])



    return (
        <div> 
            <h2>You are about to update {product.name}</h2>
            PRoduct detail page  {id} 

            <div className='more-btn-div'> 
                  <Link to="/manage">manage inventory</Link>
              </div>
        </div>
    );
};

export default ProductDetail;