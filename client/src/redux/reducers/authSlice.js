import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, {rejectWithValue}) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      let res = await axios.post("/api/auth", { email, password }, config)
      let data = res.data
      console.log(data)

      // store user's token in local storage
      localStorage.setItem('userToken', data.token)
      return data

    } catch (err) {
      console.log(err)
        return rejectWithValue(err.response.data)

      // return custom err message from API if any
      // if (err.response && err.response.data.message) {
      //   return rejectWithValue(err.response.data.message)
      // } else {
      //   return rejectWithValue(err.message)
      // }
    }
  }
)

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null


const authSlice = createSlice({
  name: "auth",
  initialState: {
    error: false,
    loading: false,
    userInfo: null,
    userToken,
    success: false,
  },
  //authSlice
  reducers: {
    removeError: (state, {payload})=>{
      state.error =false
    }
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.user = payload
      state.userToken = payload.userToken  
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false
      state.error = true
      state.errMsg = action.payload.msg? action.payload.msg : action.payload
    },
  }
})
export const {removeError } = authSlice.actions
export default authSlice.reducer