import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useProducts from '../../hooks/useProducts';
import auth from '../../firebase.init';
const MyItem = () => {  
    const user=useAuthState(auth)  
    
    const email=user[0]?.email
    const handelDelete=(id)=>{
        const proceed=window.confirm('are you sure ?') 
        if(proceed){ 
            const url=`https://enigmatic-lowlands-82160.herokuapp.com/product/${id}`
          fetch(url,{
              method:'DELETE'
          }) 
          .then(res=>res.json())
          .then(data=>{
              console.log(data); 
              const remaining=products.filter(product=>product._id !==id) 
              setProducts(remaining)
          })
        }
    }
  
    const [products,setProducts]=useProducts() 
    const myproducts=products.filter(product=>product.email ===email) 
    return (
        <div>
              <h2 className="section-header">My Items</h2> 
              <div className="service-manage">
       <div className="left">
           <p className='img-name'> img   </p> 
           <p>Product Name</p>
       </div> 
       <div className="count">
           <p className="price">Price</p>
           <p>Quantity</p>
       </div> 
       <p>Action</p>
   </div>
            {
              myproducts.map(product=><div key={product._id} className='service-manage'> 
              <div className="left">
                  <h4>{product.name}</h4>
              </div>
                       <div className="count">
                      <p className='price'>{product.price}$</p> 
                      <p>{product.quantity}KG</p>
                  </div>
                  <button className='trash-btn' onClick={()=>handelDelete(product._id)}><i class="fa fa-trash" aria-hidden="true"></i></button> 
              </div>)
          }

        </div>
    );
};

export default MyItem;