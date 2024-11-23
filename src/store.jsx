// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { thunk } from "redux-thunk";
import {
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASK,
  store,
} from "./features/tasks/taskSlice";

//! (Old Style) Step:2 Create the Redux store using the reducer
// export const store = createStore(
//   taskReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// //? RTK Slice
// const taskReducer = createSlice({
//   name: "task",
//   initialState,
//   reducers: {
//     addTask(state, action) {
//       state.task.push(action.payload);
//     },
//     deleteTask(state, action) {
//       state.task = state.task.filter(
//         (curTask, index) => index !== action.payload
//       );
//     },
//   },
// });

// This is also known as Action Creators
// const { addTask, deleteTask } = taskReducer.actions;

// //! (New Style)
// export const store = configureStore({
//   reducer: {
//     taskReducer,
//   },
// });

// Step:3 Log the initial state
// The getState method is a synchronous function that returns the current state of a Redux application. It includes the entire state of the application, including all the reducers and their respective states.
console.log("initial state", store.getState());

//! =======================================

//! This is the code of the Redux Toolkit
// // Step 4: Dispatch an action to add a task
// console.log(store.dispatch(addTask("Buy Mango")));

// console.log("initial state", store.getState());

// console.log(store.dispatch(addTask("Buy Apple")));

// console.log("initial state", store.getState());

//! ========================================

//! This is the old code of the Redux
// Step:5 Create action creators
export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );
      const task = await res.json();
      dispatch({
        type: FETCH_TASK,
        payload: task.map((curTask) => curTask.title),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
