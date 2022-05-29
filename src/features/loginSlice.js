import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{},
    isLoading:false,
    isAuth:false,
    error:'', 
}
const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        loginPending:(state)=>{
            state.isLoading=true
        },
        loginSuccess:(state,action)=>{
            state.isLoading=false
            state.isAuth=true
            state.user=action.payload
            state.error=''
        },
        loginFailed:(state,action)=>{
            state.isLoading=false
            state.isAuth=false
            state.user={}
            state.error=action.payload
        }
    }
})

export const {loginPending,loginSuccess,loginFailed}=loginSlice.actions

export default loginSlice.reducer
