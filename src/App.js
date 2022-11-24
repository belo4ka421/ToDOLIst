import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";
function App() {
  return (
    <div className="App">
      <ToDoForm />
      <ToDoItem />
    </div>
  );
}

export default App;
