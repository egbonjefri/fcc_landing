import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './components/reducers/cartReducer'

export const store = configureStore({
  reducer: {
    counter: cartSlice,
  },
})