import Chai from "./Chai"

function App() {
  
  const username = " Chai Aur Code"

  return (
    /*
    <div>
    // <h1> Chai Aur React With Vite | Arfan (vite-react-1)</h1>
    <Chai />
    <h1>
      Arafat
    </h1>
    <p>
      This is Test purpose
    </p>
  </div>
  */
  /*
  Or,
  <>...</> ==>This is Called "Fragment"
  */
 <>
    // <h1> Chai Aur React With Vite | Arfan (vite-react-1)</h1>
    <Chai />
    <h1>
      Arafat | {username}
    </h1> 
    {/* {username} -- Evaluate Expression ; Js  এর Final-Outcome লিখা হয় । */}
    {/* {if(true)} -->Please don't do this ,because ,it is not a final outcome.  */}
    {/* Here is a Commented anything */}
    <p>
      This is Test purpose
    </p>
  </>
  )
}

export default App