import React, { useState } from "react";
import "./NewTodoForm.css";
import { connect } from "react-redux";
import { createTodo } from "./actions";
const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        placeholder="Type your new Todo Here"
        type="text"
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicatedText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicatedText) {
            onCreatePressed(inputValue);
            setValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
