import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import cartReducer from "./reducers/cartSlice";
import productReducer from "./reducers/productSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: authReducer
  },
});
