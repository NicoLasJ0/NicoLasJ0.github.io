import { useState } from "react";

function TaskForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);

  return (
    <div>
      <h1>Add Task</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addTask({ title, description, id });
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setTitle(e.target.value);
          }}
          placeholder="Escribe el título de la tarea"
        ></input>
        <br />
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setDescription(e.target.value);
          }}
          placeholder="Escribe la descripción de la tarea"
        ></input>
        <input
          type="number"
          onChange={(e) => {
            console.log(e.target.value);
            setId(e.target.value);
          }}
          placeholder="Escribe el id de la tarea"
        ></input>
        <button>Send</button>
      </form>
    </div>
  );
}

export default TaskForm;
