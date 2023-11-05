import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./data/tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => setTasks(data), []);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <TaskForm addTask={addTask}></TaskForm>

      <TaskList tasks={tasks} deleteTask={deleteTask}></TaskList>
    </div>
  );
}
export default App;
