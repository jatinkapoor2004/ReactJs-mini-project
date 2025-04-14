import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =   useParams();
  return (
    <div className='bg-orange-600 text-3xl text-black py-5 text-center'>
        User {userid}
    </div>
  )
}

export default User