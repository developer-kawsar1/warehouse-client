import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notfound'>
          <div className="round">
              <h2>404</h2> 
          </div> 
          <h1>Not Found</h1>  
          <div className='line'></div>
          <p>Sorry we cannot find what you are looking for </p> 
         <Link className='home-btn' to="/">Go to Home</Link>
        </div>
    );
};

export default NotFound;