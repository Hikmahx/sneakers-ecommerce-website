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


export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, {getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { auth } = getState()


      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'x-auth-token': auth.userToken,
        },
      }
      let res = await axios.put(`/api/auth/${auth.userInfo._id}`, userData, config)
      let data = res.data
      console.log(data)
      return data
    } catch (err) {
      console.log(err)
      return rejectWithValue(err.response.data)
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
    userErrorMsg: '',
    userUpdateErrorMsg: '',
    editable: false,
    updating: false
  },
  //authSlice
  reducers: {
    removeError: (state, { payload }) => {
      state.error = false
    },
    enableUpdate: (state, action) => {
      state.editable = !state.editable
    },
    cancelUpdate: (state, action) => {
      state.editable = false
    },
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

    [updateUser.pending]: (state) => {
      state.updating = true
      state.error = false
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.updating = false
      state.userInfo = payload
      state.userUpdateErrorMsg = ''
      state.editable = false
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.updating = false
      state.error = true
      state.userUpdateErrorMsg = payload.msg ? payload.msg : payload
      state.editable = false
    },
  }
})
export const { removeError, enableUpdate, cancelUpdate } = authSlice.actions
export default authSlice.reducer