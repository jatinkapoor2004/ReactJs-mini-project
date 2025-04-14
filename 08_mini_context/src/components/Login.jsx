import React from 'react'
import { useState ,useContext} from 'react'
import UserContext from '../context/UserContext';


function Login() {
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    const{setUser} = useContext(UserContext)//give hook the name of context where data is stored
    // but now setuser is empty

    const handleSubmit = (e) =>{
        //prevent the page from refreshing 
        e.preventDefault();
        setUser({username,password})// when button clicked the setuser field get this valuess which are not put in stored data and can be accssed using setUser varible
    }
  return (
    <>
    <h2>Login </h2>
    <input
    type="text" 
    placeholder='username'
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
    {" "}
    <input
    type="password"
    placeholder='password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login