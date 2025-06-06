import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/Addtodo'
import Todos from './Components/Todos'

function App() {
  
  return (
    <>
      <h1 className='text-center text-2xl'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App