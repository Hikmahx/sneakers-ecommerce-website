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
    },
    prevPreview: (state, action) => {
      if (state.curIndex < 1) {
        state.curIndex = 0
      } else {
        state.curIndex -= 1
      }
    },
    nextPreview: (state, action) => {
      if (state.curIndex > (state.images.length - 2)) {
        state.curIndex = state.images.length - 1
      } else {
        state.curIndex += 1
      }
    }
  }
}
)

export const { getProducts, changeImage, prevPreview, nextPreview } = productSlice.actions;
export default productSlice.reducer;