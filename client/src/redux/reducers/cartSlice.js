import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from "axios";


export const createUserCart = createAsyncThunk('cart/createUserCart', async ({ products, _id }, { getState, rejectWithValue }) => {
  try {
    const userToken = localStorage.getItem('userToken')
      ? localStorage.getItem('userToken')
      : null
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userToken,
      },
    }

    // GET THE USER'S CART
    let res = await axios.get(`/api/cart/${_id}`, config)

    // CHECK IF THE USER HAS A CART IN DB
    if ((res.data === null)) {
      console.log("you dont have a cart")

      // IF NO CART, CREATE CART
      await axios.post(`/api/cart/`, { products, _id }, config)
    } else {
      // IF CART EXIST, RETURN CART
      console.log(res.data.products)
    }
  } catch (err) {
    console.log(err)
    return rejectWithValue(err.response.data)
  }
}
)

export const updateUserCart = createAsyncThunk('cart/updateUserCart', async ({ products, _id }, { getState, rejectWithValue }) => {
  try {
    const userToken = localStorage.getItem('userToken')
      ? localStorage.getItem('userToken')
      : null
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userToken,
      },
    }
    // const { cart } = getState()
    //  UPDATE USER'S CART
    let res = await axios.put(`/api/cart/${_id}`, { products, _id }, config)
    let data = res.data
    console.log(data)

  } catch (err) {
    console.log(err)
    return rejectWithValue(err.response.data)
  }
}
)


// for the cart when a user exist, dont use the post request, use put request to add to the cart and delete from the cart
// i dont think i need to use delete either to delete, just PUT and GET request 
// i think i need to use the reducer function, like if i have a user login,  i will make a request
// also if user logs out, i shd empty the cart
// i think i'll do something similar for the order

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showCart: false,
    quantity: 0,
    total: 0,
    itemTotal: 0,
    cartItems: [],
    amountTotal: 0,
    loading: false,
    error: false,
    success: false,
    errMsg: '',
    userCartItems: [],
  },
  reducers: {
    cartDisplay: (state, action) => {
      state.showCart = action.payload
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
          // IF THERE IS A USER OR IF THE USER CART ITEM IS GREATER THAN ONE, CHANGE TO THAT QUANTITY
          'quantity': action.payload.quantity? action.payload.quantity: state.quantity,
          'itemTotal': action.payload.product.discountPrice * state.quantity
        }])
      }
    },
    deleteItem: (state, action) => {
      for (let i = 0; i < state.cartItems.length; i++) {
        // GET THE INDEX OF THE ITEM
        if (state.cartItems[i].product.title.toLowerCase() === action.payload.toLowerCase()) {
          // DELETE THE ITEM
          state.cartItems = state.cartItems.filter(item => item.product.title.toLowerCase() !== action.payload.toLowerCase())
        }
      }
    },
    setTotals: (state, action) => {
      state.total = state.cartItems.map(item => item.quantity).reduce((a, b) => a + b, 0)
      state.amountTotal = state.cartItems.map(item => item.itemTotal).reduce((a, b) => a + b, 0)
    },
    emptyCartOnLogoout: (state, action)=>{
      state.cartItems =[]
    }
  },
  extraReducers: {
    [createUserCart.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [createUserCart.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.errMsg = ''
    },
    [createUserCart.rejected]: (state, {payload}) => {
      state.loading = false
      state.error = true
      state.errMsg = payload.msg ? payload.msg : payload
    },
    [updateUserCart.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [updateUserCart.fulfilled]: (state, action) => {
      state.loading = false
      state.success = true
      state.userCartItems = action.meta.arg.products
      state.errMsg = ''
    },
    [updateUserCart.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.errMsg = payload.msg ? payload.msg : payload
    },
  }
}
)

export const { cartDisplay, addToCart, quantityCount, deleteItem, setTotals, emptyCartOnLogoout } = cartSlice.actions;
export default cartSlice.reducer;