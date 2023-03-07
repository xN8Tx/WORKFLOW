import React from 'react'
import cl from './SmallText.module.scss'

export default function SmallText({children, ...props}) {
  return (
    <p className={cl.SmallText} {...props}>
      {children}
    </p>
  )
}