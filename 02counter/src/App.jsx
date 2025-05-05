import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // [index, function]
  let [counter, setCounter] = useState(15)
  // let [counter, setCounter] = useState(15)
  //use state is a hook that is used to display changes in the UI
  // let counter = 15

  const addValue = () => { 
    if(counter<20){
      setCounter(counter + 1)
      console.log("clicked", counter)
    }else{
      console.log("Maximum limit (20) reached");
    }
    
    // counter = counter+1
    
  }

  const removeValue =() => {
    setCounter(counter - 1)
    if(counter <= 0){
      setCounter(0)
    }
  }

  return (
    <>
        <h1>Hello World</h1>
        <h2>Counter Value : {counter}</h2>


        <button onClick={addValue}>
        Add Value {counter}</button>
        <br/>
        <button onClick={removeValue}
        >Remove Value {counter}</button>
        <p>footer: {counter}</p>
    </>
  )
}

export default App
