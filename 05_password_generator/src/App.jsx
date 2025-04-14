import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// callback hook is used to optimize the function by optimizing the performance and with this function will recreate new copy and store it only if its dependecies change

// on the other hand useEffect hook is used to run that optimized function everytime that dependecy change and this will run that function only once if its dependecies not change or no dependencies are given.
function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setnumberAllowed]= useState(false);
  const [charAllowed,setcharAllowed]= useState(false);
  const [password,setPassword] = useState("");

  const passwordRef = useRef(null)

    const generatePassword = useCallback(() => {

      let pass="";
      let String = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) String += "0123456789";
      if(charAllowed) String += "!@#$%^&*()";

      for(let i=1;i<=length;i++){
        const index = Math.floor(Math.random() * String.length + 1)
        pass+=String.charAt(index);
      }
      setPassword(pass);
    },[length,numberAllowed,charAllowed])
      
    useEffect(()=>{
      generatePassword();
    },[length,numberAllowed,charAllowed])

    const copyPasswordToClipboard =() =>{
      window.navigator.clipboard.writeText(password);
      passwordRef.current?.select()
    }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />

        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

      </div>

      <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                  <input 
                  type="range" 
                  min={6}
                  max={100} 
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) =>setLength(e.target.value)}
                  />
                  <label htmlFor="length"> Length :{length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
                 <input 
                 type="checkbox"
                 defaultChecked = {numberAllowed}
                 onChange={() =>{
                  setnumberAllowed((prev) => !prev)
                 }}
                 name="" 
                 id="" 
                 />
                 <label htmlFor="number"> Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
                 <input 
                 type="checkbox"
                 defaultChecked = {charAllowed}
                 onChange={() =>{
                  setcharAllowed((prev) => !prev)
                 }}
                 name="" 
                 id="" 
                 />
                 <label htmlFor="charInput"> Character</label>
            </div>
      </div>
    </div>
  )
}

export default App
