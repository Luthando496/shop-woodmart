import axios from 'axios'
import {fetchProducts,fetchProductsFail,details} from '../store'

export const fetchCategory=()=>{
    return async (dispatch)=>{
        try{

            const {data} = await axios.get('https://dummyjson.com/products/category/fragrances')

            dispatch(fetchProducts(data))
        
        
        }catch(err){
        console.log(err)
        }
    
    
    }
}


export const fetchAllProducts=()=>{
    return async (dispatch)=>{
        try{

            const {data} = await axios.get('https://dummyjson.com/products/category/furniture')

            dispatch(fetchProducts(data))
        
        
        }catch(err){
        console.log(err)
        }
    
    
    }
}


export const fetchDetails=(id)=>{
    return async (dispatch)=>{
        try{

            const {data} = await axios.get(`https://dummyjson.com/products/${id}`)

            dispatch(details(data))
        
        
        }catch(err){
        console.log(err)
        }
    
    
    }
}


