import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import './ProductDetail.css'

const ProductDetail = () => {  
    const [product,setProduct]=useState({})   

    let [count,setCount]=useState(0)
  
    const {id}=useParams()
    useEffect(()=>{
        const url=`https://enigmatic-lowlands-82160.herokuapp.com/product/${id}`  ; 
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)  
           setCount(product.quantity)
            
        })
    },[]) 



const deliverbtnClick=()=>{
     setCount(count+1)
    const url=`https://enigmatic-lowlands-82160.herokuapp.com/product/${id}`  ;
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify({quantity:99}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
            // setCount(product.quantity)
            console.log(data)}); 
        
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
                         <td>{count} </td>
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