import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/productSlice';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider =   () => {
    const {products, isLoading} = useSelector(state => state.products);
    console.log(products)

    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
{
  products &&  products.map((product) => <SwiperSlide style={{width:'300px', height:'400px',}}><img style={{width:'80%',height:'100%' }} src={product.image} alt='img'/></SwiperSlide>)
}
      {/* <SwiperSlide>Slide 1</SwiperSlide> */}

      ...
    </Swiper>
  );
};

export default Slider;