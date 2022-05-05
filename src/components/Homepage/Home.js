import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Products from './Products/Products';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Banner /> 
            <Products /> 
            <Service /> 
            <Info />
        </div>
    );
};

export default Home;