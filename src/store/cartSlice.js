import {createSlice} from '@reduxjs/toolkit'


const getCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const cartSlice = createSlice({
    name:'cart',
    initialState:{products:getCart,total:0,total_items:0},
    reducers:{
        addToCart(state,action){
            const product =action.payload
            const exist = state.products?.find(pro => pro.id === product.id)

            if(exist){
            
                exist.stock += 1;
                exist.price = exist.price + action.payload.price;
                
            }else{
                state.products.push({
                    title:product.title,
                    id:product.id,
                    price:product.price,
                    thumbnail:product.thumbnail,
                    price:action.payload.price,
                    stock:1
                })


            }
            state.total_items = state.products.length;
            state.total = state.products.reduce((a,b)=>a+b.price,0);

            localStorage.setItem('cart',JSON.stringify(state.products))
            
            
            
        },
        RemoveItem(state,action){
            const id = action.payload
            state.products = state.products.filter(pro=> pro.id !== id)
            state.total_items = state.products.length;
            localStorage.setItem('cart',JSON.stringify(state))
        },
        clearCart(state,action){
            state.total_items = state.products.length;
            state.products = []
            localStorage.removeItem('cart')
        },
    }

})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer

