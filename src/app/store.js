

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import { loadState } from '../localStorage';


const preloadedState = {
    todos: loadState()
  };
  

export const store = configureStore({
    reducer: todoReducer,
    preloadedState,
})
