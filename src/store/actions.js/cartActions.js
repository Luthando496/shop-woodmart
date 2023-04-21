import {cartActions} from '../cartSlice'
import axios from 'axios'


export const addToCart = (item) => async(dispatch) => {
        console.log(item)
        dispatch(cartActions.addToCart(item))
    



}

export const clearCartAction = () => async(dispatch) => {
    dispatch(cartActions.clearCart())


}