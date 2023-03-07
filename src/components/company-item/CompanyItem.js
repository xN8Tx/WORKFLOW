import React from 'react'
import BigText from '../../ui/text/big-text/BigText'
import SmallText from '../../ui/text/small-text/SmallText'

import './CompanyItem.scss'

export default function CompanyItem() {
  return (
    <div className='task-company-item'>
      <BigText>Task</BigText>
      <div className="task-company-item__info">
        <SmallText>Name</SmallText>
        <SmallText>Status</SmallText>
      </div>
    </div>
  )
}
