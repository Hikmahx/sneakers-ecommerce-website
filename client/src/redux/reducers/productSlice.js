import { createSlice } from '@reduxjs/toolkit'
import { AllProducts } from '../../data'


const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    modal: false,
    images: AllProducts[0].img,
    previewImg: [],
    currentIndex: 0,
    currenThumbnail: false
  },

  // productSlice
  reducers: {
    getProducts: (state, action) => {
      console.log(state)
    },
    activeThumbnail: (state, action) => {
      // REMOVE STYLE FROM INACITVE THUMBNAIL            
      action.payload.current.childNodes.forEach(img => {
        img.classList.remove('border-2', 'border-orange')
        img.firstElementChild.classList.remove('opacity-50')
      })

      // STYLE ACITVE THUMBNAIL
      return (
        action.payload.current.childNodes[state.currentIndex].classList.add('border-2', 'border-orange'),
        action.payload.current.childNodes[state.currentIndex].firstElementChild.classList.add('opacity-50')
      )
    }
  }
}
)

export const { getProducts, displayModal, activeThumbnail, activeModalThumbnail } = productSlice.actions;
export default productSlice.reducer;