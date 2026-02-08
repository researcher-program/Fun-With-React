import React, { StrictMode } from 'react' //please please please don't comment this line: " import { StrictMode } from 'react' " . //because this is very very important line...!!!
// import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
// import {jsx as _jsx} from "react/jsx-runtime.js"

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApp from './MyApp.jsx'

/* There has been gotten a issue  here,that's why I built a seperated file ,Name of:" ./MyApp.jsx " :-
function MyApp() {
  return(
    <div>
      <h1>
        Custom App
      </h1>
    </div>
  )
}
*/
const anotherUser = "Arfan"
const reactElement = React.createElement (
  /*
  1st:: parameter:'h/a/p/etc.'
  2nd::  Object:{href:'https://google.com',
  
  2.2nd::attribute:-target:"_blank"},
  3rd:: text:'Click me to visit Google'
  4th:: Variable: anotherUser
  */

  'a',
  {
    href:'https://google.com',target:"_blank"
  },
  'Click me to visit Google',
  anotherUser
)

/*
Here, is my Custom method to customize my "ReactElement" syntax,but that's not correct syntax of React-Syntax:

const ReactElement =
{
type:'a',
props:{
  href:'https://google.com',
  target:"_blank"
},
Children:'Click me to visit Google'
}
*/

const anotherElement = (
  <a href="https://google.com" target='_blank'> Visit Google</a>
)


// ReactDOM.createRoot(document.getElementById('root')).render()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyApp/> */},
    <App />,
    {/* MyApp(), */},
     {/* <MyApp/>, */},
    <reactElement />,
    {/* <ReactElement />, */},
     {/* ReactElement(), */},
    anotherElement
  </StrictMode>,
)

// Customizing Our : "div-root_id" ,to name with :  "div-arafat_id"
createRoot(document.getElementById('arafat'))
.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  // Customize it & actually it works:
    <App />,
    MyApp(),
    // <MyApp/>,
    <reactElement />,
    // <ReactElement />,
    // ReactElement(),
    anotherElement
);
 export default {
  App,
  }

