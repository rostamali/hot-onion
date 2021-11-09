import React from 'react';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Footer from '../../shared/Footer/Footer';

const Home = () => {
    
    return (
        <>  
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </>
    );
};

export default Home;