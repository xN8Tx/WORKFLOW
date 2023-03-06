import React, { useState } from 'react'

export default function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  
  
  return (
    <div className='enter-page'>
      <h2>Регистрация</h2>
      <div className="enter-page__form">
        <input type="text" placeholder='Пользователь'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="password" placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="password" placeholder='Пароль'
          value={secondPassword}
          onChange={(e) => setSecondPassword(e.target.value)}
        />
        <button>Войти</button>
      </div>
    </div>
  )
}
