import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Привет реакт я люблю тебя" },
    { id: 2, text: "О да как же я люблю тебя" },
  ]);

  function createTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(task) {
    setTasks(tasks.filter((item) => item.id !== task.id));
  }

  return (
    <div className="App">
      <ToDoForm create={createTask} />
      <ToDoList deleteTask={deleteTask} tasks={tasks} />
    </div>
  );
}

export default App;
