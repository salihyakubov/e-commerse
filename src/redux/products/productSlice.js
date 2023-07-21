import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "../sevices/productService";

export const getProducts = createAsyncThunk('GET_PRODUCTS', async (_, thunkApi) => {
  try {
    return productService.getProducts()
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data)
  }
})

// export const createShoes = createAsyncThunk('CREATE_SHOES', async (shoesData, thunkApi) => {
//   try {
//     return shoesService.createShoes(shoesData)
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.response.data)
//   }
// })

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    isError: false,
    isLoading: true,
    message: '',
    categories:{}
  },
 
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.products = action.payload
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload.message
      state.products = null
    });
    // builder.addCase(createShoes.pending, (state) => {
    //   state.isLoading = true
    // });
    // builder.addCase(createShoes.fulfilled, (state) => {
    //   state.isLoading = false
    //   state.isError = false
    // });
    // builder.addCase(createShoes.rejected, (state, action) => {
    //   state.isLoading = false
    //   state.isError = true
    //   state.message = action.payload.message
    //   state.shoes = null
    // });
  }
})

export default productSlice.reducer