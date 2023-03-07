import React, { useState } from 'react'
import MySelector from '../../ui/buttons/MySelector/MySelectro'
import SmallHeading from '../../ui/heading/small-heading/SmallHeading'
import BigText from '../../ui/text/big-text/BigText'
import BigHeading from '../../ui/heading/big-heading/BigHeading';

import './TaskItem.scss'

export default function TaskItem() {
  const [status, setStatus] = useState(false);
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
            Title
          </BigHeading>
        </div>
        <div className="tasks-item__date">
          <BigText>
            Date
          </BigText>
        </div>
      </div>
      <div className="tasks-item__body" data-active={active}>
        <BigText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut delectus, error quo est adipisci deserunt sint provident ipsam quos dolor praesentium, atque voluptates soluta reprehenderit nulla quaerat officia sunt dolore?
        </BigText>
      </div>
    </div>
  )
}
