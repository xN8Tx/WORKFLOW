import React, { useState } from 'react';
import Login from '../login/Login'
import Register from '../register/Register'
import SmallLink from '../../ui/links/SmallLink/SmallLink'

import './EnterPage.scss'

export default function EnterPage() {
  const [reg, setReg] = useState(false)
  return (
    <div className='enter'>
      <div className="enter-page">
        {
          reg
          ?
          <Register />
          :
          <Login />
        }
        <SmallLink
          onClick={() => setReg(!reg)}
        >
        {
          reg
          ?
          "Войти"
          :
          "Регистрация"
        }
        </SmallLink>
      </div>
    </div>
  )
}
