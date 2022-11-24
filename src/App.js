import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "react" },
    { id: 2, text: "react" },
  ]);
  return (
    <div className="App">
      <ToDoForm />
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
