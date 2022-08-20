import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserOrder = createAsyncThunk('order/getUserOrder', async ({ user }, { rejectWithValue }) => {
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

    let { data } = await axios.get(`/api/orders/${user}`, config)
    return data

  } catch (err) {
    return rejectWithValue(err.response.data)
  }
}
)

export const createOrder = createAsyncThunk('order/createOrder', async (orderData, { getState, rejectWithValue }) => {
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
    
    let res = await axios.get(`/api/orders/${orderData.user}`, config)


    // PREVENT DUPLICATED ORDER
    if (res.data.filter(item => item.paymentID === orderData.paymentID).length > 0) {
      // ORDER ALREADY MADE
    } else {
      await axios.post(`/api/orders/`,
        (orderData)
        , config)
    }

    let { data } = await axios.get(`/api/orders/${orderData.user}`, config)
    return data

  } catch (err) {
    return rejectWithValue(err.response.data)
  }
}
)


const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    error: false,
    success: false,
    errMsg: '',
    orders: [],
  },
  reducers: {
  },
  extraReducers: {
    [getUserOrder.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [getUserOrder.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.orders = payload
      state.errorMsg = ''
    },
    [getUserOrder.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.errorMsg = payload
      state.success = false
    },
    [createOrder.pending]: (state) => {
      state.loading = true
      state.error = false
      state.success = false
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.orders = payload
      state.errorMsg = ''
      state.success = true
    },
    [createOrder.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.errorMsg = payload.msg ? payload.msg : payload
      state.success = false
    }
  }
})

export default orderSlice.reducer
