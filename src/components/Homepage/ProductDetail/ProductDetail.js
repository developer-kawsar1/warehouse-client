import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import './ProductDetail.css'

const ProductDetail = () => {  
    const [product,setProduct]=useState({})  
    const {id}=useParams()
    useEffect(()=>{
        const url=`http://localhost:5000/product/${id}`  ;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]) 



const deliverbtnClick=()=>{
  
    const url=`http://localhost:5000/product/${id}`  ;
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify({quantity:1000}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => setProduct(product)); 
        
}
    
    return (
        <div> 
            <h2>You are about to update {product.name}</h2>
            PRoduct detail page  {id} 
              <div className="info-container"> 
               <div className='img-div'>
                   <img src={product.img} alt="" />
               </div>
                  <table className='detail-table'>
                     <tr>
                         <td>Product Name</td> 
                         <td>{product.name}</td>
                     </tr>
                     <tr>
                         <td>Price</td> 
                         <td>{product.price}</td>
                     </tr>
                     <tr>
                         <td>Description</td> 
                         <td>{product.description}</td>
                     </tr>
                     <tr>
                         <td>Quantity</td> 
                         <td>{product.quantity} KG</td>
                     </tr>
                     <tr>
                         <td>Supplier</td> 
                         <td>{product.suplier} </td>
                     </tr>
                     <tr>
                         <td>update </td> 
                       
                         <td> <div> <form action="">
                              <input type="text" placeholder='add quantity' /> 
                              <button>insert</button>
                             </form></div> <button onClick={deliverbtnClick}>Deliver</button> </td>
                     </tr>
                  </table>
              </div>
            <div className='more-btn-div'> 
                  <Link to="/manage">manage inventory</Link>
              </div>
        </div>
    );
};

export default ProductDetail;