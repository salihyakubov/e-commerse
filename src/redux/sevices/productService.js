import axios from "axios";

export const getProducts = async() => {
    const products = await axios.get('https://fakestoreapi.com/products')
    return products.data
}

// export const createShoes = async(shoesData) => {
//     console.log(shoesData)
//     const shoes = await axios.post('https://fakestoreapi.com/products', shoesData)
//     return shoes.data
// }

const productService = {
    getProducts
}

export default productService