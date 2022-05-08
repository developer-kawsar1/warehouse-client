import React from 'react';
import './Info.css'

const Info = () => {
    return (
        <div className='info'>
             <div className="info-container">
                 <div className="left">
                     <h1> DEPOT Warehousing & Storage</h1> 
                     <p>we store storage grocery data and count quantity. you can add delete data and  update also 
                         but you need to login fast. lets store a lots of products and try to add more and more producrts </p> 
                     <button className='learn-more'>Learn More </button>
                 </div> 
                 <div className="right">
                     <img src="https://i.ibb.co/q1TLvRs/mt-1508-home-img1.jpg" alt="" />
                 </div>
             </div>
        </div>
    );
};

export default Info;