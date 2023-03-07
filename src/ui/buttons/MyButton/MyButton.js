import React from 'react'
import cl from './MyButton.module.scss'

export default function MyButton({children, ...props}) {
  return (
    <button className={cl.MyButton} {...props}>
      {children}
    </button>
  )
}
