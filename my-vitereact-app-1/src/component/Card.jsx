import React from 'react'
/*
function Card(props){
    console.log("props",props);
    console.log(props.username);
    
}

বা,console.log(props.username); এর পরিবর্তে,
directly destructuring:
function Card({username}){

}
*/

// rfce

// const username = " Arafat"
// function Card()
 function Card({username,btnText = 'click me'}){
  return (
    <div className="relative block group  ">
      <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
      <div className="transition bg-black border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-6 ">
          <p className="mt-4 text-lg font-medium  text-white">Lorem ipsum dolor</p>
          <p className="mt-1 text-xs text-white ">ipsum dolor</p>
          <h1> {username} </h1>
          <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-red'> Hi {btnText || 'visit me' } </button>
        </div>
      </div>
    </div>
    
  )
}

export default Card

