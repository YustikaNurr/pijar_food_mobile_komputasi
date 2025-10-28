/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  resultUser: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setResultUser: (state, action) => {
      state.resultUser = action.payload; 
    },
  },
});

export const {setResultUser} = counterSlice.actions;

export default counterSlice.reducer;