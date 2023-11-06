import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard(props) {
  const task= props.task;
  const state= useContext(TaskContext);
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          state.deleteTask(task.id);
        }}
      >
        Delete task
      </button>
    </div>
  );
}

export default TaskCard;
