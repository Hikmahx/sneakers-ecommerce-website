import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from "axios";

export const getAddress = createAsyncThunk('address/getAddress', async ({ _id }, { rejectWithValue }) => {
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

    let { data } = await axios.get(`/api/address/${_id}`, config)
    return data
  } catch (err) {
    console.log(err)
    return rejectWithValue(err.response.data)
  }
}
)

export const createAddress = createAsyncThunk('address/createAddress', async ({ addressInfo, _id }, { getState, rejectWithValue }) => {
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

    let { data } = await axios.post(`/api/address/${_id}`, { addressInfo, _id }, config)
    return data
  } catch (err) {
    console.log(err)
    return rejectWithValue(err.response.data)
  }
}
)

export const updateAddress = createAsyncThunk('address/updateAddress', async ({ addressInfo, _id }, { getState, rejectWithValue }) => {
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

    let { data } = await axios.put(`/api/address/${_id}`, { addressInfo, _id }, config)
    return data
  } catch (err) {
    console.log(err)
    return rejectWithValue(err.response.data)
  }
}
)


const addressSlice = createSlice({
  name: "address",
  initialState: {
    loading: false,
    error: false,
    success: false,
    errMsg: '',
    addresses: [],
    showAddressForm: false 
  },
  reducers:{
   addressFormDisplay: (state, action)=>{
    state.showAddressForm = true
   },
   hideAddressForm: (state, action)=>{
    state.showAddressForm = false
   } 
  },
  extraReducers:{
    [getAddress.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [getAddress.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.addresses = payload
      state.errorMsg = ''
    },
    [getAddress.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.errorMsg = payload.msg ? payload.msg : payload
    },
  }
})


export const { addressFormDisplay, hideAddressForm } = addressSlice.actions;
export default addressSlice.reducer