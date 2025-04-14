import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github , {githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>  // this will work after / the parent route
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/' element={<User/>}>
          <Route path=':userid' element={<User/>}/>
        </Route>
        <Route 
        loader={githubInfoLoader}//this will load the data
        path='github' element={<Github/>}/>
        <Route path='*' element={<div>This page not Exists</div>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
