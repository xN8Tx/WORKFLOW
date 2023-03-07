import React from 'react'
import cl from './SmallLink.module.scss'

export default function SmallLink({children, ...props}) {
  return (
    <p className={cl.SmallLink} {...props}>
      {children}
    </p>
  )
}
