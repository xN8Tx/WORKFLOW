import React from 'react'
import BigText from '../../ui/text/big-text/BigText'
import SmallText from '../../ui/text/small-text/SmallText'

import './CompanyItem.scss'

export default function CompanyItem({task, name, status}) {
  return (
    <div className='task-company-item'>
      <BigText>{task}</BigText>
      <div className="task-company-item__info">
        <SmallText>{name}</SmallText>
        <SmallText>
          {status ? "Выполнено" : "В разработке"}
        </SmallText>
      </div>
    </div>
  )
}
