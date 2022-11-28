import React, { useState } from "react";
import "./styles/ToDoForm.css";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
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
        done: true,
      };
      create(newTask);
      setTaskText("");
    }
  }
  return (
    <form className="form-content">
      <div className="content-block">
        <MyInput
          autoFocus
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
          placeholder="Enter task"
          className="form-input"
        ></MyInput>
        <div className="form-btn">
          <MyButton onClick={addTask}>Enter</MyButton>
        </div>
      </div>
    </form>
  );
}
