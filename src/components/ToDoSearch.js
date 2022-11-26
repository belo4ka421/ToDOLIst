import React from "react";
import "./styles/ToDoSearch.css";
import MyInput from "./UI/input/MyInput";
export default function ToDoSearch({ search, setSearch }) {
  return (
    <div className="input-block">
      <MyInput
        placeholder={"Search"}
        value={search.query}
        onChange={(event) =>
          setSearch({ ...search, query: event.target.value })
        }
        className="input-search "
      ></MyInput>
    </div>
  );
}
