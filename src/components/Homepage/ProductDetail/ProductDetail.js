import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import './ProductDetail.css'

const ProductDetail = () => {  
    const [product,setProduct]=useState({})  
    // const [product,setProduct]=useState({}) 
    const {quantity}=product

     
     
  
    const {id}=useParams()
    useEffect(()=>{
        const url=`http://localhost:5000/product/${id}`  ; 
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)  
        //    setCount(product.quantity) 
       
            
        })
    },[]) 



const deliverbtnClick=()=>{ 
    let newQuantity=quantity-1 
    const newProduct={...product,quantity:newQuantity} 
    setProduct(newProduct)
  console.log("new product id "+newProduct);
    //  setCount(count)
    const url=`http://localhost:5000/product/${id}`  ;
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify({newProduct}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
            // setCount(product.quantity)
            console.log(data)}); 

            // alert("alert")
           
        
}
    
    return (
        <div> 
            <h2 className='section-header'>You are ready  to update {product.name}</h2>
         
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
                         <td>Quantity is</td> 
                         <td>{product.quantity} </td>
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