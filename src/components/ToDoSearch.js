import React from "react";
import MyInput from "./UI/input/MyInput";
import "./styles/ToDoSearch.css";
export default function ToDoSearch({ search, setSearch }) {
  return (
    <div className="input-block">
      <MyInput
        placeholder={"Поиск"}
        value={search.query}
        onChange={(event) =>
          setSearch({ ...search, query: event.target.value })
        }
        className="input-search "
      ></MyInput>
    </div>
  );
}
