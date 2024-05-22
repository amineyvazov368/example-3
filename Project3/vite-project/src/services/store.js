import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { itemAPI } from "../services/ProductQuerySlice"

export const store = configureStore({
  reducer: {

    [itemAPI.reducerPath]: itemAPI.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemAPI.middleware),
})


setupListeners(store.dispatch)

export default store;