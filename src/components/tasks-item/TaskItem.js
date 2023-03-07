import React, { useState } from 'react'
import MySelector from '../../ui/buttons/MySelector/MySelectro'
import SmallHeading from '../../ui/heading/small-heading/SmallHeading'
import BigText from '../../ui/text/big-text/BigText'
import BigHeading from '../../ui/heading/big-heading/BigHeading';

import './TaskItem.scss'

export default function TaskItem({_status, task, date, body}) {
  const [status, setStatus] = useState(_status);
  const [active, setActive] = useState(false);
  
  return (
    <div className='tasks-item'
      onClick={() => setActive(!active)}
    >
      <div className="tasks-item__info">
        <div className="tasks-item__title"
        onClick={(e) => e.stopPropagation()}
        >
          <MySelector 
            state={status}
            onClick={() => setStatus(!status)}
          />
          <BigHeading>
            {task}
          </BigHeading>
        </div>
        <div className="tasks-item__date">
          <BigText>
            {date}
          </BigText>
        </div>
      </div>
      <div className="tasks-item__body" data-active={active}>
        <BigText>
          {body}
        </BigText>
      </div>
    </div>
  )
}
