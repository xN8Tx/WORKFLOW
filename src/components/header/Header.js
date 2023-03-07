import React from 'react'
import { useNavigate } from 'react-router-dom';
import MyButton from '../../ui/buttons/MyButton/MyButton';

import './Header.scss'

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <header className='header'>
      <div className="header__logo">
        WORKFLOW
      </div>
      <div className="header__button">
        <MyButton
          onClick={() => {
            localStorage.removeItem('isAuth');
            localStorage.removeItem('user');
            navigate("/login")
          }}
        >Выход</MyButton>
      </div>
    </header>
  )
}
