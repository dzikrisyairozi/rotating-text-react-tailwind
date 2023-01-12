import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <main className='bg-[#4E6C50] grid place-items-center h-screen'>
  <div className="wrapper box-content bg-slate-100 h-[70px] flex rounded-lg py-[50px] px-[30px]">
  {/* <div className="wrapper bg-slate-100 box-content h-16 flex rounded-lg py-[50px] px-[30px]"> */}
       <p className='font-bold'>RPL is</p>
       <div className="words overflow-hidden">
        <p className='font-bold'>
           <span className='block h-full pl-2 text-red-500 font-bold'>Fantastic</span>
           {/* <span className='block h-full pl-2 text-orange-500 font-bold'>Awesome</span>
           <span className='block h-full pl-2 text-yellow-500 font-bold'>Hard</span> */}
           <span className='block h-full pl-2 text-green-500 font-bold'>Money</span>
           <span className='block h-full pl-2 text-blue-500 font-bold'>Family</span>
           </p>
       </div>
   </div>
  </main>
  )
}

export default App
