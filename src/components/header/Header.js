import React from 'react'
import MyButton from '../../ui/buttons/MyButton/MyButton';

import './Header.scss'

export default function Header() {
  return (
    <header className='header'>
      <div className="header__logo">
        WORKFLOW
      </div>
      <div className="header__button">
        <MyButton>Выход</MyButton>
      </div>
    </header>
  )
}
