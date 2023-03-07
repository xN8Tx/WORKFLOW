import React from 'react'
import cl from "./BigHeading.module.scss";

export default function BigHeading({children, ...props}) {
  return (
    <h2 className={cl.BigHeading} {...props}>
      {children}
    </h2>
  )
}
