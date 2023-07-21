import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import ProductPage from '../productPage';
import { setItemInCart } from '../../redux/cart/cartSlice';
  
export default function Products() {
    const [lgShow, setLgShow] = useState(false);
    const [id, setId] = useState(0);





    const {products, isLoading} = useSelector(state => state.products)

    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    console.log(products)

    const handleOnClick = (id) => {
        setId(id);
        setLgShow(true);
      };

    const addinCart =(id , name ,price) => {
        const newProduct = {
            id:id,
            name:name,
            price:price
        }
            dispatch(setItemInCart(newProduct))
            console.log(newProduct)
    }

    if(isLoading){
        return     <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }
    return (
        <>
        <ProductPage identy={id} lgShow={lgShow} setLgShow={setLgShow}/>
      <div className="bg-white">
         
       
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
            
              <div    key={product.id} className="group relative">

                  <div >
                                    <div onClick={() => handleOnClick(product.id)} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img style={{width:'80%', margin:'0px auto'}}
                    src={product.image}
                    
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a >
                        <span aria-hidden="true" className=" inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.title}</p>
                  </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                <button style={{cursor: 'pointer'}} onClick={addinCart(product.id, product.name, product.price)}  class=" bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-white font-semibold uppercase">Add to cart</button>
                </div>                
                
            ))}


          </div>
        </div>
      </div>
        </>
        
    )
  }