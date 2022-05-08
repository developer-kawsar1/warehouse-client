import React from 'react'; 
import './About.css'
const About = () => {
    return (
        <section class="about-us">
        <div class="about-row">
            <div class="about-col">
                <h1>We are the world's largest grocery  stock managment </h1>
                <p> Here you will find a lot of grocery items stocked. you can add and delete any product. First of all You need to login to make any change of this website  
                    .Without login or registration you can not do anything in this website . 
                     </p>
                 <a class="hero-btn red-btn" href="">Explore Now</a>
             </div>
             <div class="about-col">
                 <img src="images/about.jpg" alt="" />
             </div>
        </div>
    </section>
    );
};

export default About;