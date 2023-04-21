import {configureStore,createSlice} from '@reduxjs/toolkit'
import {cartReducer} from './cartSlice'
import {userReducer} from './userSlice'


const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null,
        product:null
    },
    reducers: {
        request(state){
            state.loading = true
        },
        fetchProducts: (state, action) => {
            state.loading = true
            state.products = action.payload.products;
            state.loading = false;
        },
        fetchProductsFail: (state, action) => {
            state.error = action.payload
            state.loading = false;
        },
        details(state,action){
            state.product = action.payload
            state.loading = false
        },
        detailsFail(state,action){
            state.error = action.payload
            state.loading = false
        },
        sortHigh(state,action){
        state.products = state.products.sort((a,b)=>b.price - a.price)
            
        },
        sortLow(state,action){
        state.products = state.products?.sort((a,b)=>a.price + b.price)
              
        }

    },


})




export const { fetchProducts, fetchProductsFail,details,detailsFail,sortHigh,sortLow,request } = productSlice.actions;


const store = configureStore({
    reducer: {
        prod:productSlice.reducer,
        cart:cartReducer,
        user:userReducer
    }
})



export default store