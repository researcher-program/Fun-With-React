import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  // let [counter, setCounter]= useState(15)
  const [counter, setCounter]= useState(15) // Same ...!


  const addValue = () =>{
    
    /*
    if (counter<20) {
      setCounter(counter + 1)
    }
      */
    // let [counter, setCounter]= useState(15)
    // console.log("Values Addedd",Math.random());
    // console.log("click",Math.random());
    console.log("click",counter);
    /*
    const counter = counter + 1
    setCounter(counter)
    */
   /*
   setCounter(counter + 1)
   setCounter(counter + 1)
   setCounter(counter + 1)
   setCounter(counter + 1)
   */
  //  setCounter((counter) => counter + 1)
   setCounter(counter => counter + 1)
   setCounter(counter => counter + 1)
   setCounter(counter => counter + 1)
   setCounter(counter => counter + 1)
   setCounter(counter => counter + 1)
  //  setCounter((prevCounter) =>{})
    // setCounter((prevCounter) => prevCounter + 1)

   /*
   Q:[Interview Purpose Question] : 
   setCounter(counter + 1)
   setCounter(counter + 1)
   setCounter(counter + 1)
   setCounter(counter + 1)
   What's the Value Count of it?
   */
  }
  const removeValue = () =>{
    /*
    if (counter>0) {
      setCounter(counter - 1)
    }
    */
    // let [counter, setCounter]= useState(15)
    // console.log("Values Addedd",Math.random());
    // console.log("click",Math.random());
    // setCounter(counter - 1)
    console.log("click",counter);
    setCounter(counter => counter - 1)
   setCounter(counter => counter - 1)
   setCounter(counter => counter - 1)
   setCounter(counter => counter - 1)
   setCounter(counter => counter - 1)
    /*
    const counter = counter - 1
    setCounter(counter)
    */
   
  }
  return (
    <>
      <h1>
        Chai  Aur React | Arafat
      </h1>
      <h2>
        Counter Value: {counter}
      </h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
      <br />
      <footer>Footer {counter}</footer>
    </>
  )
}

export default App
