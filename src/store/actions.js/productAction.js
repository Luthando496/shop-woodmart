import axios from 'axios'
import {fetchProducts,fetchProductsFail,details,sortHigh,sortLow,request,sortRating} from '../store'

export const fetchCategory=(name)=>{
    return async (dispatch)=>{
        try{
            dispatch(request())

            const {data} = await axios.get(`https://dummyjson.com/products/category/${name}`)

            dispatch(fetchProducts(data))
        
        
        }catch(err){
        console.log(err)
        }
    
    
    }
}


export const fetchAllProducts=()=>{
    return async (dispatch)=>{
        try{

            const {data} = await axios.get('https://dummyjson.com/products')

            dispatch(fetchProducts(data))
        
        
        }catch(err){
        console.log(err)
        }
    
    
    }
}


export const fetchDetails=(id)=>{
    return async (dispatch)=>{
        try{

            dispatch(request())

            const {data} = await axios.get(`https://dummyjson.com/products/${id}`)

            dispatch(details(data))
        
        
        }catch(err){
        console.log(err)
        }
    
    
    }
}



export const highSort=()=>{
return dispatch=>{
    dispatch(sortHigh())
}
}


export const lowSort=()=>{
return dispatch=>{
    dispatch(sortLow())
}
}

export const rating =()=>{
return dispatch=>{
    dispatch(sortRating())
}
}