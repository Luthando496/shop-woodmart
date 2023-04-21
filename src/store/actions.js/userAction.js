import axios from 'axios'
import {userActions} from '../userSlice'



export const register =(email,password)=>{
    return async dispatch=>{

        const data = {email,password}

        dispatch(userActions.registerUser(data))

        // console.log()

    }


}



export const signIn =(data)=>{
    return async dispatch=>{

        // const data = {email,password}

        dispatch(userActions.signInUser(data))

        // console.log()

    }


}