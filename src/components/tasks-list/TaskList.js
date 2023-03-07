import React from 'react'
import TaskItem from "../tasks-item/TaskItem"
import BigHeading from '../../ui/heading/big-heading/BigHeading'

import './TaskList.scss'
import { useSelector } from 'react-redux'
import { selfTasksSelector } from '../../store/tasks/tasks'

export default function TaskList() {
  const data = useSelector(state => selfTasksSelector(state, localStorage.getItem("user")));
  return (
    <div className="tasks-list">
      <BigHeading>Задачи</BigHeading>
      <div className="tasks-list__list">
        {data.map(i => (
          <TaskItem 
            key={i.id}
            _status={i.status}
            task={i.task}
            date={i.date}
            body={i.body}
          />
        ))}
      </div>
    </div>
  )
}