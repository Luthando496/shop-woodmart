import {configureStore,createSlice} from '@reduxjs/toolkit'



const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {

        fetchProducts: (state, action) => {
            state.loading = true
            state.products = action.payload;
            state.loading = false;
        },
        fetchProductsFail: (state, action) => {
            state.err = action.payload
        },
    },


})




export const { fetchProducts, fetchProductsFail } = productSlice.actions;


const store = configureStore({
    reducer: {prod:productSlice.reducer}
})



export default store