// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import './App.css'
import { useState } from "react";

function App() {
  const [val, setVal] = useState(false)

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className='relative w-80 h-40 bg-zinc-500 rounded-md flex overflow-hidden'>
        <img className={`shrink-0 transition-transform duration-300 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1709311432832-5db3e22e53f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className={`shrink-0 transition-transform duration-300 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1713991088877-ec5df174a0f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D" alt="" />

        <span onClick={() => setVal(() => !val)} className="w-8 h-8 bg-zinc-200 absolute flex justify-center items-center rounded-full bg-[#dadada8b] bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {val === false ? <MdOutlineArrowForwardIos /> : <MdOutlineArrowBackIos />}
        </span>
      </div>
    </div>
  )
}

export default App
