

import { useState } from 'react'
import { InputBox } from "./components";
import useCurrencyInfo from './hooks/useCurrencyInfo';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return(
    <>
    <h1 className='text-3xl bg-orange-500'> Currency App || Arafat </h1>

<div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      //  backgroundImage: `url( '${ backgroundImage }')`
        
      backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
  }} >
  <div className="w-full">
   <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
  <form onSubmit={(e) => { e.preventDefault(); convert() }} >
   <div className="w-full mb-1">
   <InputBox
    label="From"
    amount={amount}
    currencyOptions={options}
    onCurrencyChange={(currency) => setAmount(amount)}
    selectCurrency={from}
    onAmountChange={(amount) => setAmount(amount)}
    selectCurrency= {from} />
</div>
  <div className="relative w-full h-0.5">
    <button
      type="button"
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
      onClick={swap} > swap </button>
</div>
  <div className="w-full mt-1 mb-4">
    <InputBox
     label="To"
    amount={convertedAmount}
    currencyOptions={options}
    onCurrencyChange={(currency) => setTo(currency)}
    selectCurrency={from}
    amountDisable
    />
</div>
  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
    Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
        </form>
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
