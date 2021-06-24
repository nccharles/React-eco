import React from "react";
import "./todoListItem.css";
const TodoListItem = ({
  todo,
  onRemovePressed,
  onCompletePressed,
  isCompleted,
}) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      {isCompleted ? null : (
        <button
          className="completed-button"
          onClick={() => onCompletePressed(todo.text)}
        >
          Mark as Completed
        </button>
      )}
      <button
        onClick={() => onRemovePressed(todo.text)}
        className="remove-button"
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
