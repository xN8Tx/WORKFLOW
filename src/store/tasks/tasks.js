import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const addTasks = createAction("ADD_TASKS", (tasks) => ({
  payload: tasks
}))

const loadTasks = () => (dispatch) => {
  axios.get("https://64060fc640597b65de493e01.mockapi.io/tasks")
    .then(res => dispatch(addTasks(res.data)))
}

const selfTasksSelector = (state, name) => state.tasks.filter(t => t.name === name); 
const companyTasksSelector = (state, name) => state.tasks.filter(t => t.name !== name); 


const tasks = createReducer([], (builder) => {
  builder
    .addCase(addTasks, (state, action) => {
      state.push(...action.payload)
    })
});

export { addTasks, loadTasks, tasks, selfTasksSelector, companyTasksSelector };