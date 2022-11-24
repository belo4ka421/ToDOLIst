import React from "react";
import "./styles/ToDoForm.css";
export default function ToDoForm() {
  return (
    <form className="form-content">
      <input placeholder="Enter task" className="form-input"></input>
      <div>
        <button className="form-btn">Enter</button>
      </div>
    </form>
  );
}
