import {cartActions} from '../cartSlice'


export const addToCart = (product) => (dispatch) => {
    console.log(product)
    dispatch(cartActions.addToCart(product))


    // localStorage.setItem('cart', JSON.stringify(product))

}