import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from "./reducers/authSlice";
import cartReducer from "./reducers/cartSlice";
import productReducer from "./reducers/productSlice";
import addressReducer from "./reducers/addressSlice";
import orderReducer from "./reducers/orderSlice";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)


export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: persistedReducer,
    auth: authReducer,
    address: addressReducer,
    order: orderReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store)