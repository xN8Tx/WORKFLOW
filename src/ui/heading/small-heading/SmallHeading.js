import React from 'react'
import cl from "./SmallHeading.module.scss";

export default function SmallHeading({children, ...props}) {
  return (
    <h2 className={cl.SmallHeading} {...props}>
      {children}
    </h2>
  )
}
