import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
         
      <div className="banner-container">
         <div className="banner-content">
             <h1>
             Distribution, Storage, Warehousing Delate  & Update
             </h1> 
             <p> 
             Your solution for first class warehousing services for the goods, food, grocery, pharmaceutical and general commodity industries.
             </p> 
             <Link  className='banner-btn' to="/about">About us</Link>
         </div>
      </div>
   
        </div>
    );
};

export default Banner;