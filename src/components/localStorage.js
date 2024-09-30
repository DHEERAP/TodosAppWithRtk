import React from 'react'

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('todos');
      if (serializedState === null) {
        return [];
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return [];
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('todos', serializedState);
    } catch (err) {
      // Ignore write errors.
    }
  };
  