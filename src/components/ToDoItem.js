import React from "react";
import "./styles/ToDoItem.css";
import MyButton from "./UI/button/MyButton";

export default function ToDoItem({ task, deleteTask, changeDone }) {
  return (
    <div className="wrapper">
      <div className="item-content">
        <div
          className={task.done ? "item-task " : "item-task-done"}
          onClick={() => changeDone(task)}
        >
          {task.text}
        </div>
        <div className="item-btn">
          <MyButton onClick={() => deleteTask(task)} className="item-delete">
            Удалить
          </MyButton>
        </div>
      </div>
    </div>
  );
}
