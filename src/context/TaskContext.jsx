import { createContext } from "react";
import { tasks as data } from "../data/tasks";
import { useEffect, useState } from "react";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => setTasks(data), []);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        addTask: addTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
