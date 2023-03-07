import React, { useEffect, useState } from 'react';
import Login from '../login/Login'
import Register from '../register/Register'
import SmallLink from '../../ui/links/SmallLink/SmallLink'

import './EnterPage.scss'
import { useNavigate } from 'react-router-dom';

export default function EnterPage() {
  const [reg, setReg] = useState(false)
  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem('isAuth') === "true" && localStorage.getItem('isAuth').length !== 0) {
      navigate("/tasks")
    }
  }, []);
  
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
