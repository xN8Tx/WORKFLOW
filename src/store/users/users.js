import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const addUsers = createAction("ADD_USERS");

const loadUsers = () => (dispatch) => {
  axios.get("https://64060fc640597b65de493e01.mockapi.io/name")
    .then(data => data.data.filter(i => i.password = "Иди нахуй долбаеб"))
    .then(res => dispatch(addUsers(res)))
}; 

const users = createReducer([], (builder) => {
  builder
    .addCase(addUsers, (state, action) => {
      state.push(...action.payload);
    })
}); 

export { addUsers, loadUsers, users }