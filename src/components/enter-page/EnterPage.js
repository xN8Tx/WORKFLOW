import React, { useState } from 'react'
import Login from '../login/Login'
import Register from '../register/Register'

export default function EnterPage() {
  const [reg, setReg] = useState(false)
  return (
    <div className='enter'>
      {
        reg
        ?
        <Register />
        :
        <Login />
      }
    </div>
  )
}
