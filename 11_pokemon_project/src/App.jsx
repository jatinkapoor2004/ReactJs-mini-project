import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center h-screen bg-zinc-600'>
          <div className='border border-black rounded-2xl bg-gray-400 w-2/3 h-3/5'>
              <div className='flex justify-center mt-4'>
                  <button 
                    type="submit"
                    className='border border-none px-4 py-2 rounded-md bg-blue-600 text-white'
                  >Fet Random Pokemon </button>
              </div> 

              <div className='flex justify-center mt-3  p-1 text-xl text-gray-950 '>
                  Name will be shown here 
              </div>
              <div className='flex justify-center items-center mt-16'>
                Image will be shown here  
              </div>

          </div>
      </div>
    </>
  )
}

export default App
