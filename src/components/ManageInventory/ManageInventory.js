import React from 'react'; 
import './manageInventory.css'
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageInventory = () => { 
    const [products,setProducts]=useProducts() 
    const handelDelete=(id)=>{
        const proceed=window.confirm('are you sure ?') 
        if(proceed){ 
            const url=`http://localhost:5000/product/${id}`
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
    return (
        <div>
            Manage inventory page  
          

          {
              products.map(product=><div key={product._id} className='service-manage'>
                  <h4>{product.name}<button onClick={()=>handelDelete(product._id)}>x</button> </h4>
              </div>)
          }

        <div className='add-new-product-div'>
           <Link to="/addproduct">Add new Product</Link>
        </div>
        </div>
    );
};

export default ManageInventory;