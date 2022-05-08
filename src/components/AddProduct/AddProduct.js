import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './AddProduct.css' 
import auth from '../../firebase.init';
const AddProduct = () => {  
  const user=useAuthState(auth)  
  const email=user[0].email;
    const addProductForm=(e)=>{ 
        e.preventDefault()
        const name=e.target.name.value 
        const price=e.target.price.value 
        const description=e.target.description.value
        const img=e.target.img.value 
        const suplier=e.target.suplier.value
        const quantity=e.target.quantity.value 
        const product={name,price,description,img,suplier,quantity,email}
        console.log(product);   
        e.target.reset()
        
        // const url=`http://localhost:3000/product` 
        // fetch(url,{
        //     method:"POST",
        //     headers:{
        //      'content-type':'application/json',
        //      'Accept': 'application/json'
        //     },
        //     body:JSON.stringify(product)
        // })  
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log("data id"+data);
        // }) 





// test 
fetch('http://localhost:5000/product', {
  method: 'POST',
  body: JSON.stringify(product),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
// test


    }
    return (
        <div className='add-product-page'>
            <h2 className='section-header'>Add product </h2> 


            <form action="" onSubmit={addProductForm}>

                <input type="text" name='name' placeholder='name' /> 
                <input type="text" name='price' placeholder='price'/>
                <input type="text" name='description' placeholder='description' /> 
                <input type="text" name='img' placeholder='image link' />
                <input type="text" name="suplier"   placeholder='suplier'/> 
                <input type="text" name="quantity"  placeholder='quantity'/> 
                <button type='submit' className='add-btn'>add product</button>
            </form>
        </div>
    );
};

export default AddProduct;