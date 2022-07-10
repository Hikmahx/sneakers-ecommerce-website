import { createSlice, } from "@reduxjs/toolkit";
// import productSlice from "./productSlice";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showCart: false,
    quantity: 0,
    total: 0,
    itemTotal: 0,
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
      // INCREASE QUANTITY IF THE STATE IS LESS THAN 1
      state.quantity = state.quantity < 1 ? 1 : state.quantity

      // IF THE ITEM IS ALREADY IN THE CART
      if (state.cartItems.map(item => item.id).includes(action.payload.product._id)) {
        for (let i = 0; i < state.cartItems.length; i++) {
          // GET THE INDEX OF THE ITEM
          if (state.cartItems[i].id === action.payload.product._id) {
            // UPDATE ITS QUANTITY BY ADDING FROM THE CURRENT QUANTITY & ITEM TOTAL STATE
            state.cartItems[i].quantity += state.quantity
            state.cartItems[i].itemTotal += (action.payload.product.discountPrice * state.quantity)

          }
        }
      } else {
        // IF ITEM ISN'T IN THE CART
        state.cartItems = ([...state.cartItems, {
          'id': action.payload.product._id,
          'product': action.payload.product,
          'quantity': state.quantity,
          'itemTotal': action.payload.product.discountPrice * state.quantity
        }])
      }
    }
  }
}
)

export const { cartDisplay, addToCart, quantityCount } = cartSlice.actions;
export default cartSlice.reducer;