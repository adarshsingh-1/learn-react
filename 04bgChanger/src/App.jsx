import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  // The on click method in React expects a function reference
  // You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax
  // 17:12 Refresh karne pe olive is lie aa rah a kio ke usestate ki defualt value di ha humne 
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
      >
        <div className="fixed flex wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={ () => {
              setColor("red")
            }}
            className="outline-none px-5 py-2 rounded-lg text-white shadow-lg" 
            style={{backgroundColor: "red"}}
            >Red</button>
            <button onClick={ () => {
              setColor("green")
            }}
            className="outline-none px-5 py-2 rounded-lg text-white shadow-lg" 
            style={{backgroundColor: "green"}}
            >Green</button>
            <button onClick={ () => {
              setColor("yellow")
            }}
            className="outline-none px-5 py-2 rounded-lg text-white shadow-lg" 
            style={{backgroundColor: "Yellow"}}
            >Yellow</button>
            <button 
            onClick={ () => {
              setColor("blue")
            }}
            className="outline-none px-5 py-2 rounded-lg text-white shadow-lg" 
            style={{backgroundColor: "Blue"}}
            >Blue</button>
            <button onClick={ () => {
              setColor("pink")
            }}
            className="outline-none px-5 py-2 rounded-lg text-white shadow-lg" 
            style={{backgroundColor: "Pink"}}
            >Pink</button>
            <button onClick={ () => {
              setColor("lavender")
            }}
            className="outline-none px-5 py-2 rounded-lg text-white shadow-lg" 
            style={{backgroundColor: "lavender"}}
            >Lavender</button>
            <button onClick={ () => {
              setColor("gray")
            }}
            className="outline-none px-5 py-2 rounded-lg text-white shadow-lg" 
            style={{backgroundColor: "gray"}}
            >Gray</button>
            <button onClick={ () => {
              setColor("black")
            }}
            className="outline-none px-5 py-2 rounded-lg text-white shadow-lg" 
            style={{backgroundColor: "black"}}
            >Black</button>
          </div>
        </div>
      </div>

      {/* <h1> Hello </h1> */}
    </>
  )
}

export default App
