
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement = {
    type :'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me'
}
const actualReactElement = React.createElement(
    'a',
    {
        href:"https://www.google.com",
        target: "_blank",
    },
    'click here to visit google through actual element'
)

function app(){// make it upper case or use it using function call inside of bracket syntax
    return(
    <>
        <h1>This is heading from app function</h1>
    </>
    )
}
const MyElement = (// it is converted into react.createelement in the backend process
    <a href="https://www.google.com" target='_blank'> Click to visit google</a>
)

createRoot(document.getElementById('root')).render(//this render function accepts only 1 args as component
  
    //app(),
    //MyElement
    actualReactElement
)
