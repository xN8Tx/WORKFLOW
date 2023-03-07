import { configureStore } from '@reduxjs/toolkit';
import { tasks } from './tasks/tasks';
import { users } from './users/users';


const store = configureStore({
  reducer: {
    tasks: tasks,
    users: users
  },
  devTools: true,
  
});

export { store }