import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (thunkAPI) => {
    let res = await axios.get('/api/products/')
    let products = res.data
    return products
  })

export const getProductsByCollection = createAsyncThunk(
  'product/getProductsByCollection',
  async (collection, thunkAPI) => {
    let res = await axios.get(`/api/products/?collection=${collection}`)
    let productsCollection = res.data
    return productsCollection
  })


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
    loading: true,
    error: false,
    errMsg: '',
    filter: { company: '', color: '' },
    containFilters: [],
    sort: 'newest',
    colors: [],
    brands: [],
    collection: []
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload.products
      state.loading = false
    },
    setError: (state, action) => {
      state.loading = false
      state.error = true
      state.errMsg = action.payload.err
    },
    getFilteredProducts: (state, action) => {
      state.filteredProducts = state.products.filter((item) =>
        item.categories.at(-1).gender.includes(action.payload.gender)
      )
    },
    changeImage: (state, action) => {
      // CHANGE PREVIEW IMG ON CLICK
      state.curIndex = action.payload.index
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
      state.productId = action.payload.productId
      state.product = state.products.filter((item) => item._id === state.productId)[0]
      state.images = state.error ? null : state.product.img
    },
    getFilters: (state, action) => {
      // GET LIST OF ALL COLORS FROM PRODUCTS
      state.colors = Array.from(new Set(state.colors.concat.apply([], (state.filteredProducts.length > 0 ? state.filteredProducts : state.products).map(item => item.categories.at(-1).color)))).sort()
      // GET LIST OF ALL BRANDS/COMPANIES FROM PRODUCTS 
      state.brands = Array.from(new Set(state.brands.concat.apply([], (state.filteredProducts.length > 0 ? state.filteredProducts : state.products).map(item => item.company)))).sort()
    },
    selectFilters: (state, action) => {
      state.filter = action.payload.filter

      // return an array of true and false based on if the product contains a filter
      if (state.filter.color === '' && state.filter.company === '') {
        state.containFilters = (state.filteredProducts.length < 1 ? state.products : state.filteredProducts).map(item => true)
      } else
        if (state.filter.company !== '' && state.filter.color === '') {
          state.containFilters = (state.filteredProducts.length < 1 ? state.products : state.filteredProducts).map(item => (Object.entries(state.filter).every(([key, value]) => item.company.includes(value))))
        }
        else {
          state.containFilters = (state.filteredProducts.length < 1 ? state.products : state.filteredProducts).map(item => (Object.entries(state.filter).every(([key, value]) => (item.categories.at(-1)[key] || item[key]).includes(value))))
        }
    },
    selectSort: (state, action) => {
      state.sort = action.payload.sort
      let items = state.filteredProducts.length < 1 ? state.products : state.filteredProducts

      switch (action.payload.sort) {
        case 'newest':
          items = (state.filteredProducts.length < 1 ? state.products : state.filteredProducts).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
          break;
        case 'asc':
          items = (state.filteredProducts.length < 1 ? state.products : state.filteredProducts).sort((a, b) => a.discountPrice - b.discountPrice)
          break;
        case 'desc':
          items = (state.filteredProducts.length < 1 ? state.products : state.filteredProducts).sort((a, b) => b.discountPrice - a.discountPrice)
          break;
        default:
          // eslint-disable-next-line
          items = (state.filteredProducts.length < 1 ? state.products : state.filteredProducts).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
          break;
      }
    }
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.loading = true
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.products = payload
      state.containFilters = state.products.map(item => true)
    },
    [getAllProducts.rejected]: (state, action) => {
      state.loading = false
      state.error = true
      state.errMsg = action.error.message
    },
    [getProductsByCollection.pending]: (state) => {
      state.loading = true
    },
    [getProductsByCollection.fulfilled]: (state, { payload, meta, collection }) => {
      state.loading = false
      state.collection = payload
    },
    [getProductsByCollection.rejected]: (state, action) => {
      state.loading = false
      state.error = true
      state.errMsg = action.error.message
    },
  }
}
)

export const { getProducts, setError, getFilteredProducts, changeImage, prevPreview, nextPreview, prevSlide, nextSlide, getProductItem, quantityCount, selectFilters, selectSort, getFilters } = productSlice.actions;
export default productSlice.reducer;