import React from "react";
import "./styles/ToDoItem.css";
export default function ToDoItem({ task }) {
  return (
    <div className="wrapper">
      <div className="item-content">
        <div className="item-task">{task.text}</div>
        <div>
          <button className="item-delete">Удалить</button>
        </div>
      </div>
    </div>
  );
}
