
import { useState, useCallback, useEffect, useRef } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(true)
  const [password, setpassword] = useState(" ")

  //useRef Hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = "AaBbCcDdEeFfGgHhIiJjKjLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    if (numberAllowed) str += '0123456789'
    if (characterAllowed) str += '!@#$%^&*-_+=[]{}()~`'

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  },
  [length, numberAllowed, characterAllowed,setpassword])

  const copyPasswordToClick = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, characterAllowed, passwordGenerator])

return(
  <>
  
  <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
    <h1  className=' text-center text-white my-3'> Password Generator </h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
      <input 
      type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}

      />
      <button 
      onClick={copyPasswordToClick}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '
      >Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="text" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)}}
        name="" id="" />
        <label htmlFor="">
          Length:{length}
        </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked={numberAllowed}
        className='cursor-pointer'
        onChange={() => {setnumberAllowed((prev) => !prev);}}
        name="" id="numberInput" />
        <label htmlFor="numberInput">
          Numbers
        </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={characterAllowed}
        id='characterInput'
        onChange={()=>{
          setcharacterAllowed((prev) =>!prev);
        }}
        />
        <label htmlFor="characterInput"> Character </label>
      </div>
    </div>
  </div>
  </>
)

/*
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
*/

}

export default App

