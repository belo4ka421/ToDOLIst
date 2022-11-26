import React from "react";
import ToDoItem from "./ToDoItem";
import "./styles/ToDoList.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export default function ToDoList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <div className="empty-list">Список пуст</div>;
  }
  return (
    <div>
      <TransitionGroup>
        {tasks.map((task) => (
          <CSSTransition key={task.id} timeout={500} classNames="task">
            <ToDoItem deleteTask={deleteTask} key={task.id} task={task} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
