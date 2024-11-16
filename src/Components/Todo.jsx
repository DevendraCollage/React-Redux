import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, fetchTask } from "../store";

const Todo = () => {
  const tasks = useSelector((state) => state.task);

  // Use this for to handle the input values
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  // Delete task handle function
  const handleTaskDelete = (id) => {
    return dispatch(deleteTask(id));
  };

  // Form submit handle function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    return setTask("");
  };

  // Fetch tasks from the API
  const handleFetchTasks = () => {
    dispatch(fetchTask());
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square"></i>To-do List:
        </h1>
        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button>Add Task</button>
          </form>
        </div>

        <button className="task" onClick={handleFetchTasks}>
          Fetch Tasks
        </button>

        <ul id="list-container">
          {tasks.map((currTask, index) => {
            return (
              <li key={index}>
                <p>
                  {index} : {currTask}
                </p>
                <div className="icon-style">
                  <MdDeleteForever
                    size={23}
                    className="icon-style"
                    onClick={() => handleTaskDelete(index)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
