import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import React from "react";

export interface TitleState { 
    children: React.ReactNode;
} 

const initialState: TitleState = {
    children: 
        <>
            <h1>M4cgyvers Repurposed Mining Rig. </h1>
            <p>Welcome to my website/resume (depending on whos reading). Written in NextJS 13 and NodeJs!</p>
        </>,
  
}
 
const titleSlice = createSlice({
    name: "title",
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<React.ReactNode>) => { state.children = action.payload; }, 
    },
});

export const {setTitle} = titleSlice.actions;
export default titleSlice.reducer;