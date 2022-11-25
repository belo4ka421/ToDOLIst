import React from "react";
import ToDoItem from "./ToDoItem";
import "./styles/ToDoList.css";
export default function ToDoList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <div className="empty-list">Список пуст</div>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <ToDoItem deleteTask={deleteTask} key={task.id} task={task} />
      ))}
    </div>
  );
}
