import { createSlice } from '@reduxjs/toolkit'
import { AllProducts } from '../../data'


const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    images: AllProducts[0].img,
    curIndex: 0,
  },

  // productSlice
  reducers: {
    getProducts: (state, action) => {
      console.log(state)
    },
    changeImage: (state, action) => {
      // CHANGE PREVIEW IMG ON CLICK
      state.curIndex = action.payload
    }
  }
}
)

export const { getProducts, changeImage } = productSlice.actions;
export default productSlice.reducer;