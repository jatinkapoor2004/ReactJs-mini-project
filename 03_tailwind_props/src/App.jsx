import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-amber-400 p-3 rounded-lg'>vite with tailwind</h1>
     <br/>
     <Card username="Jatin Kapoor" post='SDE 1'/>
     <br/>
     <Card username='Harman'/>
     <br/>
     <Card post='SDE 3'/>
    </>
  )
}

export default App
