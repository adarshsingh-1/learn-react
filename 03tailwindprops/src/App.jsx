import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "JohnDoe",
    age: 30,
  }
  let myArray = [1, 2, 3, 4, 5]
  return (
    <>
    <h1 className='bg-yellow-400 text-black p-4'>Hello World</h1>
    <Card username="learn-react" someObje = {myArray}/>
    <Card />

    </>
  )
}

export default App
