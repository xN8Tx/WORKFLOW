import React, { useState } from 'react'
import MyButton from '../../ui/buttons/MyButton/MyButton';
import SmallHeading from '../../ui/heading/small-heading/SmallHeading';
import MyInput from '../../ui/input/MyInput';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <>
      <SmallHeading>Войти</SmallHeading>
      <div className="enter-page__form">
        <MyInput type="text" placeholder='Пользователь'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <MyInput type="password" placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MyButton>Войти</MyButton>
      </div>
    </>
  )
}
