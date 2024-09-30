


    import {createSlice, nanoid } from '@reduxjs/toolkit';

    const initialState = {
        todos: []
    }
    // {id: 1, text: "Hello world"}

    export const todoSlice = createSlice({
        name: "todo",
        initialState,
        reducers :   {
            addTodo: (state, action) => {
                const todo= {
                    id: nanoid(),
                    text: action.payload,
                    completed: false
                }   
                state.todos.push(todo)           
            },
            removeTodo: (state, action) => {
                state.todos =state.todos.filter((todo) => todo.id !==  action.payload)
            },
            updateTodo: (state,   action) => {
                state.todos = state.todos.map((todo) => todo.id === action.payload.id ?  {...todo, text: action.payload.text}  : todo )
            },
            toggleCompleted: (state, action) => {
                state.todos = state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                );
            }
        }

    })

    export const {addTodo, removeTodo, updateTodo, toggleCompleted} = todoSlice.actions
    export default todoSlice.reducer

























      // updateTodo: (state, action) =>  {
        //     state.todos = state.todos.map((todo) => todo.id  === action.payload.id ? action.payload.text : todo)
        // },