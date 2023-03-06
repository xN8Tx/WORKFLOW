import React, { useState } from 'react'

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className='login-page'>
      <h2>Войти</h2>
      <div className="enter-page__form">
        <input type="text" placeholder='Пользователь'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="password" placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Войти</button>
      </div>
    </div>
  )
}
