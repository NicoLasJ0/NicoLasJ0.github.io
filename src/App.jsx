import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./data/tasks";


function App() {


  return (
    <div>
      <TaskForm></TaskForm>

      <TaskList></TaskList>
    </div>
  );
}
export default App;
