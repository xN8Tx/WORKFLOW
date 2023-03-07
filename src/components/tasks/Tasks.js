import React from 'react'
import TaskList from '../tasks-list/TaskList'
import CompanyTasks from '../company-task/CompanyTasks'

import './Tasks.scss'

export default function Tasks() {
  return (
    <div className="tasks">
      <div className="tasks-wrapper">
        <TaskList />
        <CompanyTasks />
      </div>
    </div>
  )
}
