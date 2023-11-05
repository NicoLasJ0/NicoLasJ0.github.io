function TaskCard(props) {
  const task = props.task;
  const index = props.index;
  return (
    <div key={index}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.deleteTask(task.id);
        }}
      >
        Delete task
      </button>
    </div>
  );
}

export default TaskCard;
