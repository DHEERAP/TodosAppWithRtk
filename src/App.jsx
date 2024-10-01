import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
return (
<>
<h1 className="text-3xl font-bold text-center text-black-600 mb-4 ">Write your daily Todos!</h1>
<AddTodo />
<Todos />
</>
)
}

export default App
