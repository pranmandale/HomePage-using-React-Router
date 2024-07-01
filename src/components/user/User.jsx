import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-yellow-700 text-black py-5 text-center'>
      user:{userid}
    </div>
  )
}

export default User
