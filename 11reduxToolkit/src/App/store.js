import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Feature/Todo/todoSlice';


// Create a store with the reducer
export const store = configureStore({
    reducer: todoReducer
})
