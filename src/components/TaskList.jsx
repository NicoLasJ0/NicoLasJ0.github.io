import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import { useContext } from "react";
function TaskList() {
  const state = useContext(TaskContext);
  const tasks = state.tasks;
  if (tasks.length === 0) {
    return <h1>No hay na</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, index) => (
        <TaskCard task={task} key={index}></TaskCard>
      ))}
    </div>
  );
}
export default TaskList;
