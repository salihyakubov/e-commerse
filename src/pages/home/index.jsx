import React from 'react';
import StaticCarousel from '../../components/carousel';
import Footer from '../../components/footer';
import Header from '../../components/nav';
import Products from '../../components/products';
import Slider from '../../components/slider';
import About from '../../components/about';

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <h2 style={{width:'50%', margin:'10px auto', padding:'auto'}} className="text-2xl font-bold tracking-tight text-gray-900">Our collections</h2>
            <p>Welcome to our exquisite collection, where you'll find a captivating array of fashionable items to elevate your style.</p>
            <Slider/>
            <Products/>
            <Footer/>
        </div>
    );
};

export default Home;