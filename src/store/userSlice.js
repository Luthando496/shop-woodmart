import {createSlice} from '@reduxjs/toolkit'


const getUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;




const userSlice = createSlice({
    name:'user',
    initialState:{user:getUser},
    reducers:{

        signInUser(state,action){
            state.user = action.payload;
        },
        registerUser(state,action){
            state.user = action.payload;
        },
        logOut(state,action){
            state.user =null;
        },

    
    }


})


export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
