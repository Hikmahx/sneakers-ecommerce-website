import { createSlice, } from "@reduxjs/toolkit";
// import productSlice from "./productSlice";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showCart: false,
    quantity: 0,
    total: 0,
    cartItems: []
  },
  reducers: {
    cartDisplay: (state, action) => {
      state.showCart = !state.showCart
    },
    quantityCount: (state, action) => {
      switch (action.payload) {
        case '':
          state.quantity = 0
          break;
        case 'decrease':
          state.quantity = Math.max(state.quantity - 1, 0)
          break;
        case 'increase':
          state.quantity = Math.min(state.quantity + 1, 100)
          break;
        default:
          state.quantity = Math.min(parseInt(action.payload), 100)
          break;
      }
    },
    addToCart: (state, action) => {
      // if(action.payload.id)
      state.cartItems.push({
        'quantity': state.quantity,
        'product': action.payload,
        total: state.total
      })
    }
  }
}
)

export const { cartDisplay, addToCart, quantityCount } = cartSlice.actions;
export default cartSlice.reducer;