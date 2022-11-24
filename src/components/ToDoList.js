import React from "react";
import ToDoItem from "./ToDoItem";
export default function ToDoList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} />
      ))}
    </div>
  );
}
