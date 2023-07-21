import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/productSlice';
import Spinner from 'react-bootstrap/Spinner';

const StaticCarousel = () => {

    const {products, isLoading} = useSelector(state => state.products);

    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    if(isLoading){
        return     <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }
    return (
        <Carousel style={{width: "60%", margin:'0px auto'}}>
            {products.map(product => (<Carousel.Item style={{width: "200px",height:'400px', margin:'0px auto', backgroundColor:'black'}} interval={1000} >
          <img style={{margin:'0px auto', borderRadius:'20px'}}
            // className="d-block w-100"
            src={product.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{product.title}</h3>
          </Carousel.Caption>
        </Carousel.Item> ))}
       
      </Carousel>
  
    );
  };

export default StaticCarousel;