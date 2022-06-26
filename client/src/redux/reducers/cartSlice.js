import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showCart: false,
    total: 0,
    cartItems: []
  },
  reducers: {
    cartDisplay: (state, action)=>{
      state.showCart  = !state.showCart
    },
  }
}
) 

export const {cartDisplay} =  cartSlice.actions;
export default cartSlice.reducer;