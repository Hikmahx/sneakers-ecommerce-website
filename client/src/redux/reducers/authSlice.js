import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
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

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, { getState, rejectWithValue }) => {
    try {

      // get user data from store
      const { auth } = getState()

      // configure authorization header with user's token
      const config = {
        headers: {
          'x-auth-token': auth.userToken,
        },
      }
      const { data } = await axios.get(`/api/auth`, config)

      return data
    } catch (err) {
      console.log(err)
      return rejectWithValue(err.response.data)
      // if (error.response && error.response.data.message) {
      //   return rejectWithValue(error.response.data.message)
      // } else {
      //   return rejectWithValue(error.message)
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
    errMsg: '',
    userErrorMsg: ''
  },
  //authSlice
  reducers: {
    removeError: (state, { payload }) => {
      state.error = false
    }
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload.user
      state.userToken = payload.token
      state.errMsg = ''
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.errMsg = payload.msg ? payload.msg : payload
    },

    [getUserDetails.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userErrorMsg = ''
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.userErrorMsg = payload.msg ? payload.msg : payload
    },
  }
})
export const { removeError } = authSlice.actions
export default authSlice.reducer