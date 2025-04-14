import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    // ALL THE VARIABLE IN SIDE HAVE NOW ACCESS TO THE USER STATE VARIBALE 
    // WHEN LOGIN OCCUR USER VARIABLE GET ITS VALUES AND THEN PROFILE USE IT 
     <UserContextProvider>
    <>
      <h1>This is Mini Context</h1>
      <Login/>
      <Profile/>
    </>
     </UserContextProvider>
    
  )
}

export default App
