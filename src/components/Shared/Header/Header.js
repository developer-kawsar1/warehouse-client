import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Header.css'
import auth from '../../../firebase.init';
const Header = () => {   
    const user =useAuthState(auth) 
    console.log(user[0]?.uid);
    const [click,setClick]=useState(false) 
    const handelClick=() => {
        setClick(!click) 
      }
    return (
        <div>
            
            <nav className="navbar"> 
      <div className="nav-container">
          <Link to="/" className='nav-logo'>Grab Grocers </Link> 
          <ul className={click? "nav-menu active" : "nav-menu"}>
              <li className='nav-item'><Link onClick={handelClick} className='nav-links'  to="/">Home</Link></li>
              <li className='nav-item'><Link onClick={handelClick} className='nav-links' to="/about">About</Link></li>
              <li className='nav-item'><Link onClick={handelClick} className='nav-links' to="/blog">Blog</Link></li>
              {
                   user?.[0]?.uid? <>   <li className='nav-item'><Link onClick={handelClick} className='nav-links' to="/manage">Manage Product</Link></li><li className='nav-item'><Link onClick={handelClick} className='nav-links' to="/addproduct">Add Product</Link></li> </> :<> </>
              
               }
            
              {/* <li className='nav-item'><Link onClick={handelClick} className='nav-links' to="login">Login</Link></li>  */}
              
             {/* <li className='btn-flex'>
             {
            user?.uid? <> <button   onClick={()=>signOut(auth)}>sign out </button>  <li>{user?.displayName }</li> </> : 
             <Link to="/login"><button onClick={handelClick} >Login</button></Link>
          }
             </li> */}
          </ul> 
          <div className="nav-icon" onClick={handelClick}>
              <i className={click? "fa fa-times" :"fa fa-bars"}></i> 
             
          </div>
      </div>
          </nav>
        </div>
    );
};

export default Header;