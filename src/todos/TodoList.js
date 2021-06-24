import React from "react";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import "./todoList.css";
import NewTodoForm from "./NewTodoForm";
import { removeTodo, completeTodo } from "./actions";
import { displayAlert } from "./thunk";
const TodoList = ({ todos = [], onRemovePressed, onCompletePressed,onDisplayAlert }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        isCompleted={todo.isCompleted}
        onCompletePressed={onDisplayAlert}
        onRemovePressed={onRemovePressed}
      />
    ))}
  </div>
);
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(completeTodo(text)),
  onDisplayAlert: () => dispatch(displayAlert()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
