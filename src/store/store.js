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
            state.products = action.payload;
            state.loading = false;
        },
        fetchProductsFail: (state, action) => {
            state.error = action.payload
            state.loading = false;
        },
        details(state,action){
            state.state = true
            state.product = action.payload
            state.loading = false
        },
        detailsFail(state,action){
            state.error = action.payload
            state.loading = false
        },

    },


})




export const { fetchProducts, fetchProductsFail,details,detailsFail } = productSlice.actions;


const store = configureStore({
    reducer: {
        prod:productSlice.reducer,
        cart:cartReducer,
        user:userReducer
    }
})



export default store