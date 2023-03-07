import React from 'react'
import cl from './MyInput.module.scss';

export default function MyInput({...props}) {
  return (
    <input className={cl.MyInput} {...props}/>
  )
}
