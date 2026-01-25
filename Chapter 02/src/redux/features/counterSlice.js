import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increatement:(state)=>{
            state.value +=1
        },
        decreatement:(state)=>{
            state.value -=1
        },
        increasByFive:(state)=>{
            state.value +=5
        },
        increasPayLoad:(state,action)=>{
            state.value +=action.payload
        }
    }
})

export const {increatement,decreatement,increasByFive,increasPayLoad} = counterSlice.actions
export default counterSlice.reducer