import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductPage from '../productPage';
import { setItemInCart } from '../../redux/cart/cartSlice';

const Categories = () => {
  const [lgShow, setLgShow] = useState(false);
  const [id, setId] = useState(0);
  const [items, setItems] = useState([]);
  const { products, isLoading } = useSelector(state => state.products);
  const { itemInCart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleOnClick = (id) => {
    setId(id);
    setLgShow(true);
  };

  const addinCart = (id, title, price, image) => {
    dispatch(
      setItemInCart({
        id: id,
        title: title,
        price: price,
        image: image,
      })
    );
    console.log(itemInCart);
  };

  useEffect(() => {
    setItems(products);
  }, [products]);

  const filterProductsByCategory = (category) => {
    setItems(products.filter(product => product.category === category));
  };

  return (
    <>
      <ProductPage identy={id} lgShow={lgShow} setLgShow={setLgShow} />
      <div style={{ padding: '100px' }} class="w-full bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="grid h-full grid-cols-5 mx-auto font-medium">
          <button onClick={() => setItems(products)} style={{ padding: '10px' }} type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">All</span>
          </button>
          <button onClick={() => filterProductsByCategory("men's clothing")} style={{ padding: '10px' }} type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Man's</span>
          </button>
          <button onClick={() => filterProductsByCategory("women's clothing")} style={{ padding: '10px' }} type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Woman's</span>
          </button>
          <button onClick={() => filterProductsByCategory("electronics")} style={{ padding: '10px' }} type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Electronics</span>
          </button>
          <button onClick={() => filterProductsByCategory("jewelery")} style={{ padding: '10px' }} type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Jewelery</span>
          </button>
        </div>
        <div className='mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {items.map((item) => (
            <div key={item.id} className="group relative mt-6">
              <div onClick={() => handleOnClick(item.id)} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img style={{ width: '80%', margin: '0px auto' }} src={item.image} className="h-full w-full object-cover object-center lg:h-full lg:w-full" alt={item.title} />
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="text-sm font-medium text-gray-900">${item.price}</p>
              </div>
              <button style={{ cursor: 'pointer' }} onClick={() => addinCart(item.id, item.title, item.price, item.image)} className="bg-indigo-600 px-8 py-2 mt-4 rounded-3xl text-white font-semibold uppercase">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;