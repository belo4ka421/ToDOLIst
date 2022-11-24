import React, { useState } from "react";
import "./styles/ToDoForm.css";
export default function ToDoForm({ tasks, setTasks }) {
  const [taskText, setTaskText] = useState("");

  function addTask(event) {
    event.preventDefault();
    if (taskText === "") {
      alert("Вы ничего не ввели");
    } else {
      const newTask = {
        id: Date.now(),
        text: taskText,
      };
      setTasks([...tasks, newTask]);
      setTaskText("");
    }
  }
  return (
    <form className="form-content">
      <input
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        placeholder="Enter task"
        className="form-input"
      ></input>
      <div>
        <button onClick={addTask} className="form-btn">
          Enter
        </button>
      </div>
    </form>
  );
}
