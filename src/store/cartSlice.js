import {createSlice} from '@reduxjs/toolkit'


const getCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const cartSlice = createSlice({
    name:'cart',
    initialState:{cart:{products:getCart,total:0,total_items:0}},
    reducers:{
        addToCart(state,action){
            const product =action.payload
            const exist = state.cart.products?.find(pro => pro.id === product.id)

            if(exist){
            
                exist.stock += 1;
                exist.price = exist.price + action.payload.price;
                
            }else{
                state.cart.products.push({
                    title:product.title,
                    id:product.id,
                    price:product.price,
                    thumbnail:product.thumbnail,
                    price:action.payload.price,
                    stock:1
                })


            }
            state.cart.total_items = state.cart.products.length;
            state.total = state.cart.products.reduce((a,b)=>a+b.price,0);

            localStorage.setItem('cart',JSON.stringify(state.cart))
            
            
            
        },
        RemoveItem(state,action){
            const id = action.payload
            state.cart.products = state.cart.products.filter(pro=> pro.id !== id)
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        clearCart(state,action){
            state.cart.products = []
            localStorage.removeItem('cart')
        },
    }

})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer

