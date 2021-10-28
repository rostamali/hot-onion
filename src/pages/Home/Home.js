import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <>  
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
        </>
    );
};

export default Home;