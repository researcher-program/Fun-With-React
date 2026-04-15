import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
  return (
    <div>
      <h1>
        Custom App By Myself ...!
      </h1>
    </div>
  )
}
/*
const ReactElement = {
type:'a',
props:{
href:'https://google.com',
target:"_blank"
},
Children:'Click me to visit Google'
}
*/
/*
const anotherElement = (
  <a href="https://google.com" target='_blank'> Visit Google</a>
)
*/
const anotherUser = " Chai Aur React "
/*
const reactElements = React.createElement(
  
  // 1st Expected : tag,
  // 2nd : Object{},
  // 3rd : Text 
  
 "a",
 {
  href:"https://google.com",target:'_blank'
 },
 'Click Me To Get Google',
 anotherUser

)
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  /*
  <StrictMode>
   { <MyApp /> }
    MyApp()
    { <App />  }
  </StrictMode>
  */
    // <MyApp />
  //  MyApp()
  // <ReactElement />
  // ReactElement()
  // ReactElement
  // anotherElement
  // anotherElement()
  // <anotherElement />

  // reactElements
   <App />
)