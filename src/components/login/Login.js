import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from '../../functions';
import MyButton from '../../ui/buttons/MyButton/MyButton';
import SmallHeading from '../../ui/heading/small-heading/SmallHeading';
import MyInput from '../../ui/input/MyInput';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
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
        <MyButton
          onClick={() => {
            auth(name, password).then((r) => {
              navigate("/tasks")
            });
          }}
        >Войти</MyButton>
      </div>
    </>
  )
}
