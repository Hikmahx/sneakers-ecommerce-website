import { createSlice, } from "@reduxjs/toolkit";
// import productSlice from "./productSlice";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showCart: false,
    quantity: 0,
    total: 0,
    itemTotal: 0,
    cartItems: [],
    quantityArray: []
  },
  reducers: {
    cartDisplay: (state, action) => {
      state.showCart = !state.showCart
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
    },
    addToCart: (state, action) => {
      state.quantity = state.quantity < 1 ? 1 : state.quantity

      // console.log(state.quantityArray.map(item=>item.id).includes(action.payload.product._id))
      if(state.quantityArray.map(item=>item.id).includes(action.payload.product._id)){
      for (let i = 0; i < state.quantityArray.length; i++) {
        if (state.quantityArray[i].id === action.payload.product._id) {
          console.log("increase in quantity")
          state.quantityArray[i].quantity = state.quantity
        }else{
          console.log("already in cart with the same quantity")
        }
      }
        
        
          // if(state.quantityArray.filter(item=> item.id === action.payload.product._id)[0].quantity===state.quantity){
          //   console.log((state.quantityArray.filter(item=> item.id === action.payload.product._id)[0].id))
          // }else{

          // }
          // console.log(state.quantityArray.filter(item=> item.id === action.payload.product._id)[0].quantity===state.quantity? state.quantityArray.filter(item=> item.id === action.payload.product._id)[0] : {...state.quantityArray.filter(item=> item.id === action.payload.product._id)[0], quantity: state.quantity})
          // state.quantityArray.filter(item=> item.id === action.payload.product._id)[0].quantity===state.quantity? state.quantityArray.filter(item=> item.id === action.payload.product._id)[0] : {...state.quantityArray.filter(item=> item.id === action.payload.product._id)[0], quantity: state.quantity}
        // )
        // state.quantityArray.filter(item=> item.id === action.payload.product._id)[0] = state.theItem
        
        // state.quantityArray.filter(item=> item.quantity === state.quantity && item.id === action.payload.product._id)[0].quantity = state.quantity
        
        
        
      }else{
        state.quantityArray =  ([...state.quantityArray, {
          'id':action.payload.product._id,
          'quantity': state.quantity
        }])
      }





      state.cartItems = state.cartItems.map(item => item.id).includes(action.payload.product._id) ?
        state.cartItems
        : [...state.cartItems, {
          'id': action.payload.product._id,
          'product': action.payload.product
        }]








      // state.quantity = (state.cartItems.push({
      //   'quantity': state.quantity,
      //   'product': action.payload.product,
      //   'itemTotal': action.payload.product.discountPrice * state.quantity
      // }))



      // console.log(state.cartItems.map(item=> item.product === action.payload.product))

      // for (let i = 0; i < state.cartItems.length; i++) {
      //   if (state.cartItems[i].product === action.payload) {
      //     console.log("already in cart")
      //   }else{
      //     console.log("added to cart")
      //           state.cartItems.push({
      //   'quantity': state.quantity,
      //   'product': action.payload.product,
      //   'itemTotal': action.payload.product.discountPrice * state.quantity
      // }) 
      //   }
      // }
      // state.cartItems.push({
      //   'quantity': state.quantity,
      //   'product': action.payload.product,
      //   'itemTotal': action.payload.product.discountPrice * state.quantity
      // }) 

      // state.cartItems = state.cartItems.filter(item=> item.product !== action.payload.product)
      // state.cartItems = [new Map(state.cartItems.map((item, key) => [item[key], item])).values()]



      // console.log(state.cartItems.findIndex(item=>item._id))
      // state.cartItems.forEach(item=>{
      //   // console.log(state.cartItems.indexOf(item))
      //   console.log(state.cartItems.lastIndexOf(item._id))
      // })

      // console.log(state.cartItems.indexOf(action.payload))

      // for (let i = 0; i < state.cartItems.length; i++) {
      //   if (state.cartItems[i]._id === action.payload._id) {
      //     console.log("already in cart")
      //   }else{
      //     console.log("added to cart")
      //   }
      // }

      // let items = state.cartItems.reduce((a,v) => {
      //   a[v._id] ?  a[v._id].push(v) : a[v.id] = [v];
      //   return a;
      // }, {});
      // console.log(items)

      // state.cartItems = state.cartItems.reduce((num, item)=>{
      // num[item.title] = ()
      // return num + (item._id)
      // })

      // state.cartItems.reduce(function(sums,entry){
      //   sums[entry.product] = (sums[entry] || 0) + 1;
      //   console.log(sums)
      //   console.log(entry)
      // state.itemOccurence = sums[entry]

      // if(state.itemOccurence  < 2){
      //   console.log("added to cart")
      // }else{
      //   console.log("already in cart")
      // }
      // console.log(sums)
      //     return sums;

      //  },{})


    }
  }
}
)

export const { cartDisplay, addToCart, quantityCount } = cartSlice.actions;
export default cartSlice.reducer;