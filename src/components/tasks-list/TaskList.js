import React from 'react'
import TaskItem from "../tasks-item/TaskItem"
import BigHeading from '../../ui/heading/big-heading/BigHeading'

import './TaskList.scss'

export default function TaskList() {
  return (
    <div className="tasks-list">
      <BigHeading>Задачи</BigHeading>
      <div className="tasks-list__list">
        <TaskItem />
        <TaskItem />

      </div>
    </div>
  )
}
