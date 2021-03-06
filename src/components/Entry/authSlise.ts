import {  createSlice } from '@reduxjs/toolkit';
import { auth } from './common';

const initialState = <auth> {isAuth:false};

export const authSlice = createSlice({
 name: 'isAuth',
 initialState,
  reducers: {
    authorization: (state:auth):auth => ({...state, isAuth: true}),
    exit: (state:auth):auth => ({...state, isAuth: false}),
  }
})
export const { authorization, exit } = authSlice.actions;
export default authSlice.reducer;