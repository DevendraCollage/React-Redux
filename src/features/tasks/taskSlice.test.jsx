// ! This is the test code file

import { addTask, deleteTask, store } from "../../store";

// Step:4 Dispatch an action to add a task
store.dispatch(addTask("Redux Code"));
console.log("updated state", store.getState());

store.dispatch(addTask("React Redux Code"));
console.log("updated state", store.getState());

store.dispatch(deleteTask(1));
console.log("deleted state", store.getState());
