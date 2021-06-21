import React, { useState } from "react";
import "./NewTodoForm.css"
const NewTodoForm = () => {
  const [inputValue, setValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
       placeholder="Type your new Todo Here"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
};
export default NewTodoForm;
