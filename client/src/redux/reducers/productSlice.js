import { createSlice } from '@reduxjs/toolkit'
import { AllProducts } from '../../data'


const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    filteredProducts: [],
    images: [],
    curIndex: 0,
    slideIndex: 0,
    productId: 0,
    product: [],
    quantity: 0
  },

  // productSlice
  reducers: {
    getProducts: (state, action) => {
      state.products = AllProducts
    },
    getFilteredProducts: (state, action) => {
      state.filteredProducts = state.products.filter((item) =>
        item.category.at(-1).gender.includes(action.payload)
      )
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
    },
    prevSlide: (state, action) => {
      if (state.slideIndex < 1) {
        state.slideIndex = 0
      } else {
        state.slideIndex -= 1
      }
    },
    nextSlide: (state, action) => {
      if (state.slideIndex > (state.images.length - 2)) {
        state.slideIndex = state.images.length - 1
      } else if ((state.slideIndex > (state.images.length - 3) && window.innerWidth > 640)) {
        state.slideIndex = state.images.length - 2
      }
      else {
        state.slideIndex += 1
      }
    },
    getProductItem: (state, action) => {
      state.productId = action.payload
      state.images = AllProducts[action.payload - 1].img
      state.product = AllProducts[action.payload - 1]
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
    }
  }
}
)

export const { getProducts, getFilteredProducts, changeImage, prevPreview, nextPreview, prevSlide, nextSlide, getProductItem, quantityCount } = productSlice.actions;
export default productSlice.reducer;