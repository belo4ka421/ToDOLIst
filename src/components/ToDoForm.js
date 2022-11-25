import React, { useState } from "react";
import "./styles/ToDoForm.css";
import MyButton from "./UI/button/MyButton";
export default function ToDoForm({ create }) {
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
      create(newTask);
      setTaskText("");
    }
  }
  return (
    <form className="form-content">
      <input
        autoFocus
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        placeholder="Enter task"
        className="form-input"
      ></input>
      <div>
        <MyButton onClick={addTask}>Enter</MyButton>
      </div>
    </form>
  );
}
