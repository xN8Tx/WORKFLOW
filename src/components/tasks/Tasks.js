import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import TaskList from '../tasks-list/TaskList'
import CompanyTasks from '../company-task/CompanyTasks'

import './Tasks.scss'
import { loadUsers } from '../../store/users/users'
import { useDispatch } from 'react-redux'
import { loadTasks } from '../../store/tasks/tasks'

export default function Tasks() {
  const isAuth = localStorage.getItem('isAuth');
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('isAuth') === "true" && localStorage.getItem('isAuth').length !== 0) {
      dispatch(loadUsers());
      dispatch(loadTasks());
    }
  }, [dispatch])
  return (
    <>
    { 
      isAuth === 'true' 
      ?
      (<div className="tasks">
        <div className="tasks-wrapper">
          <TaskList />
          <CompanyTasks />
        </div>
      </div>)
      :
      <Navigate to="/login" />
    }
    </>
  )
}
