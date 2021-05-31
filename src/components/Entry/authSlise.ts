import {  createSlice } from '@reduxjs/toolkit';
import { Auth } from './common';

const initialState = <Auth> {isAuth:false};
export const authSlice = createSlice({
 name: 'isAuth',
 initialState,
  reducers: {
    authorization:():Auth => ({isAuth:true}),
    exit:():Auth => ({isAuth:false}),
  }
})
export const { authorization, exit } = authSlice.actions;
export default authSlice.reducer;