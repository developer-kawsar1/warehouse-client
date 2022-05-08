import React from 'react';
import './Service.css'


const Service = () => {
    return (
        <div className='service'>
            <div className="section-title">
                <h2>Our Specialties</h2> 
                <p>Best Solution for Your Needs</p>
            </div> 
            <div className="row">
                <div className="sercive-container">
                    <div className="single-service">
                        <div className='single-top'>
                            <img src="https://i.ibb.co/SQTcyy9/mt-1508-home-icon1.png" alt="" /> 
                            <h3> Storage</h3>
                        </div> 
                        <div className='parag'>
                            <p>
                                Store safely your product to our website 
                            </p>
                        </div>
                    </div>
                    <div className="single-service">
                        <div className='single-top'>
                            <img src="https://i.ibb.co/hBZ9Thn/mt-1508-home-icon2.png" alt="" /> 
                            <h3> Distribution</h3>
                        </div> 
                        <div>
                            <p>
                                You can also distribute product here 
                            </p>
                        </div>
                    </div>
                    <div className="single-service">
                        <div className='single-top'>
                            <img src="https://i.ibb.co/jkLd9jk/mt-1508-home-icon3.png" alt="" /> 
                            <h3> Trucking</h3>
                        </div> 
                        <div>
                            <p>
                                Deliver your product safely to your desired destination 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;