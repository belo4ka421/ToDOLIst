import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Привет реакт я люблю тебя" },
    { id: 2, text: "О да как же я люблю тебя" },
  ]);
  return (
    <div className="App">
      <ToDoForm tasks={tasks} setTasks={setTasks} />
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
