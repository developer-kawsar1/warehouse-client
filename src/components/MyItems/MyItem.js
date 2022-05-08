import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useProducts from '../../hooks/useProducts';
import auth from '../../firebase.init';
const MyItem = () => {  
    const user=useAuthState(auth)  
    const email=user[0]?.email
    
  
    const [products,setProducts]=useProducts() 
    const myproducts=products.filter(product=>product.email ===email) 
    return (
        <div>
            <h3>My item page {myproducts.length} </h3> 
            {
              myproducts.map(product=><div key={product._id} className='service-manage'>
                  <h4>{product.name} </h4>
              </div>)
          }

        </div>
    );
};

export default MyItem;