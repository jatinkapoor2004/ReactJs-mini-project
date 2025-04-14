import { useState } from 'react'

import './App.css'

function App() {

    //const counter =0;
    const[counter, changeMyCount]= useState(0);
    function increment(){
        // changeMyCount(counter+1); 
        // changeMyCount(counter+1); 
        // changeMyCount(counter+1); 
        // changeMyCount(counter+1); 
        
        //this increase only by 1 because of problem of Batching ,to change it multiple then use this 

        changeMyCount((prevcounter) => prevcounter+1);
        changeMyCount((prevcounter) => prevcounter+1);
        changeMyCount((prevcounter) => prevcounter+1);
        changeMyCount((prevcounter) => prevcounter+1);
    }

    function decrement(){
      changeMyCount(counter-1);
    }
  return (
    <>
      <h1>this is Counter in Heading : {counter} </h1>
      <button onClick = {increment}>  Add value</button>{" "}
      <button onClick={decrement}>Remove value</button>  
      <p>This is paragraph and value of counter here is : {counter} </p>
      <footer>This is footer : {counter} </footer>
    </>
  )
}

export default App
