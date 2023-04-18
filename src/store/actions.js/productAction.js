import axios from 'axios'
import {fetchProducts,fetchProductsFail,details} from '../store'

export const fetchCategory=(name)=>{
    return async (dispatch)=>{
        try{
            console.log(name)

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

            const {data} = await axios.get(`https://dummyjson.com/products/${id}`)

            dispatch(details(data))
        
        
        }catch(err){
        console.log(err)
        }
    
    
    }
}


