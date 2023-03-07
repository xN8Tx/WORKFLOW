import React from 'react'
import { cl } from './BigText.module.scss'

export default function BigText({children, ...props}) {
  return (
    <p className={cl.BigText} {...props}>
      {children}
    </p>
  )
}
