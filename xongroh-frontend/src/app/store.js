import { configureStore } from "@reduxjs/toolkit"
import authReducer from "@/app/slices/authSlice"
import { apiSlice } from "@/app/slices/apiSlice"


export const store = configureStore({
  reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer,
  },
  middleware: getDefaultMiddleware => 
      getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})