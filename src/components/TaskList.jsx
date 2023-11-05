import TaskCard from "./TaskCard";

function TaskList(props) {
  const tasks = props.tasks;
  console.log(tasks);
  if (tasks.length === 0) {
    return <h1>No hay na</h1>;
  }
  return tasks.map((task, index) => (
    <TaskCard task={task} index={index} deleteTask={props.deleteTask}></TaskCard>
  ));
}

export default TaskList;
