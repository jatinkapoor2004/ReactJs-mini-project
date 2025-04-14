import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    // OPENING THE PORTAL AND USING STORING ITS VALUES IN USER VARIABLE 
    const {user} = useContext(UserContext)
    if(!user) return(<h1>Not Logged In</h1>)
  return (
    <div>Profile : {user.username} </div>
  )
}

export default Profile