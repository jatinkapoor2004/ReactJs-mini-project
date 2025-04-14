import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')


  return (
    <>
      <div className="w-full h-screen duration-200"  style={{backgroundColor:color}}>

        <div className='flex justify-center items-center h-screen'>

            <button 
            onClick={() =>setColor('red')} 
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black border-2 border-white bg-red-800'>
              Red
            </button>
            
            <button 
            onClick={()=>setColor('blue')} 
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black border-2 border-white bg-blue-800'>
              Blue
            </button>

            <button 
            onClick={()=>setColor('olive')} 
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black border-2 border-white bg-yellow-300'>
              Reset
            </button>

            <button 
            onClick={()=>setColor('green')} 
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black border-2 border-white bg-green-800'>
              Green
            </button>
            
        </div>
      
      </div>
    </>
  )
}

export default App
