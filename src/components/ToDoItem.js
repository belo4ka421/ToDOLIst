import React from "react";
import "./styles/ToDoItem.css";
import MyButton from "./UI/button/MyButton";
export default function ToDoItem({ task, deleteTask }) {
  return (
    <div className="wrapper">
      <div className="item-content">
        <div className="item-task">{task.text}</div>
        <div>
          <MyButton onClick={() => deleteTask(task)} className="item-delete">
            Удалить
          </MyButton>
        </div>
      </div>
    </div>
  );
}
