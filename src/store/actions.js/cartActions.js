import {cartActions} from '../cartSlice'


export const addToCart = (product) => (dispatch) => {
    dispatch(cartActions.addToCart(product))

}