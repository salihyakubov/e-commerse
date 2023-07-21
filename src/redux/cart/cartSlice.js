import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name: 'cart',
    initialState:{
        itemInCart:[]
    },
    reducers:{
        setItemInCart: (state, action) => {
            state.itemInCart.push(action.payload)
        },
        deleteItemInCart: (state, action) => {
            state.itemInCart= state.itemInCart.filter(products => products.id !== action.payload)
        },
        deleteItemsInCart: (state, action) => {
            state.itemInCart= []
        },

    }
})

export const {setItemInCart, deleteItemInCart ,deleteItemsInCart} = cartSlice.actions;
export default cartSlice.reducer;