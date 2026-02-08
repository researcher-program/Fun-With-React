
import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // const [count, setCount] = useState(0) //default


  //Here, I customizes:
 const [color, setColor] = useState("olive")

  return (
    <>
      ,{/* default tags: 
      
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
      </p> */},

  {/* //Here, I customizes: */},
  <div className='w-full h-screen duration-200' 
  style={{/*backgroundColor:"#000000"*/
    backgroundColor:color}}
  >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      {/* Test */}
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        {/* Test */}

{/* 
// onClick={setColor}
// onClick={setColor()}
// onClick={setColor("red")}
// onClick={()=>{}}
// onClick={()=>setColor('red')}
*/}
        <button
        
          onClick={()=>setColor('red')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"red"}}
        >Red</button>
        <button
        
          onClick={()=>setColor('green')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"green"}}
        >Green</button>
        <button
        
          onClick={()=>setColor('blue')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"blue"}}
        >Blue</button>
        <button
        
          onClick={()=>setColor('gray')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"gray"}}
        >Gray</button>
        <button
        
          onClick={()=>setColor('yellow')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"yellow"}}
        >Yellow</button>
        <button
        
          onClick={()=>setColor('pink')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"pink"}}
        >Pink</button>
        <button
        
          onClick={()=>setColor('purple')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"purple"}}
        >Purple</button>
        <button
        
          onClick={()=>setColor('white')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"white"}}
        >White</button>
        <button
        
          onClick={()=>setColor('black')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"black"}}
        >Black</button>
        <button
        
          onClick={()=>setColor('lavender')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"lavender"}}
        >Lavender</button>

        </div>
      </div> 
  </div>

    </>
  )
}

export default App



