
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Chai from "./chai"
import Card from './component/Card'

function App() {
  // const [count, setCount] = useState(0)
// let counter = 15
  // let [counter, setCounter]= useState(15)
  // const [arafat, setArafat] = // নাম যা খুশি দেওয়া যাবে ,তাতে কোনো সমস্যা নেই !!!

  const [counter, setCounter]= useState(15) // Same ...!
  // useState(true/false/""/''/"Arafat"/[]/{}/0)
/*
  useState(function useStates() {
  })
  */
//  useState()//That means ,যা ইচ্ছা তাই দেওয়া যাবে!!!!  অর্থাৎ default value।

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
  //  setCounter((prevCounter) =>{}) // But,given curleybrace's ,then set "return " keyword & its value.
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter(counter => counter + 1)

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
  
  const username = " Arafat"
  let myObj ={
    username:"arafat",
    age:21
  }
  let newArray = [1,2,3,4]
  return (
    
    <div>
      <Chai/>
      <h1>
        Chai is My Favorite. {username} 
        {/* "username " ==> Expression ,but "{username}" ==>Evaluate Expression =>That means ,Not written JS,only written by Final Outcomes.
        That means not to written,like:
        {if(true) username} -->X 
        */}
      </h1>
      <p>Specially " Milk Chaiy "</p>
    </div>,

    <> //This name is "Fragment"
      <Chai/>
      <h1>
        Chai is My Favorite.
      </h1>
      <p>Specially " Milk Chaiy "</p>
    </>

    // <Chai/>,

 /* Here, I customize my react file */
    ,{/*
    <h1> Hello React with Vite Lover || From  Al- Arafat</h1>
    */},

    
    // Here,I inject "HOOKs"
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
    </>,


    // Here,I inject "TailwindCss"
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>,
    {/* <Card channel="chaiaurcode" myArr=[1,2,3] myObj ={name:"chai"} someObj =myObj /> //here some getting problem  */}
    <Card />
    <Card  channel = " arafat" someObj ={myObj} someArr = {newArray} />
    <Card username = " Islam" btnText ="Click Me" />
    <Card username = "{arfan}" btnText ="Click Me" />
    ,{/* <div className="relative block group  ">
      <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
      <div className="transition bg-black border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-6 ">
          <p className="mt-4 text-lg font-medium">Lorem ipsum dolor</p>
          <p className="mt-1 text-xs">ipsum dolor</p>
        </div>
      </div>
    </div> */}
    </>

  )
}
/*
For Hooks:
Here,GitHub Links:

https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js

*/


/*
function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    
  )
}

*/
/*
// Here,I inject "TailwindCss"
// export default function Card6() 
 function Card6(){
  return (
    <div className="relative block group  ">
      <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
      <div className="transition bg-black border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-6 ">
          <p className="mt-4 text-lg font-medium">Lorem ipsum dolor</p>
          <p className="mt-1 text-xs">ipsum dolor</p>
        </div>
      </div>
    </div>
  )
}
*/

export default App

