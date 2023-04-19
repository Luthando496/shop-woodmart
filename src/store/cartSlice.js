import {createSlice} from '@reduxjs/toolkit'




const cartSlice = createSlice({
    name:'cart',
    initialState:{products:[]},
    reducers:{
        addToCart:(state,action)=>{
           state.products = state.products.push({
        id:action.payload.id,
        name:action.payload.title,
        price:action.payload.price,
        image:action.payload.thumbnail,
        stock:1
    })
        }
    }

})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer

