import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const state = useContext(TaskContext);

  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-slate-800 p-10 mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          state.addTask({ title, description, id });
        }}
      >
        <h1 className="text-2xl font-bold text-white mb-3">Add Task</h1>
        <input className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setTitle(e.target.value);
          }}
          placeholder="Escribe el título de la tarea"
        ></input>
        <br />
        <input className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setDescription(e.target.value);
          }}
          placeholder="Escribe la descripción de la tarea"
        ></input>
        <br />
        <input className="bg-slate-300 p-3 w-full mb-2"
          type="number"
          onChange={(e) => {
            console.log(e.target.value);
            setId(e.target.value);
          }}
          placeholder="Escribe el id de la tarea"
        ></input>
        <br />
        <button className="bg-indigo-500 px-3 py-1 text-white">Send</button>
      </form>
    </div>
  );
}

export default TaskForm;
