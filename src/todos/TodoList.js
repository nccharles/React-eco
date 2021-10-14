import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import "./todoList.css";
import NewTodoForm from "./NewTodoForm";
import { removeTodo, completeTodo } from "./actions";
import { loadTodos } from "./thunk";
const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletePressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const isLoadingMessage = <div>Loading...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          isCompleted={todo.isCompleted}
          onCompletePressed={onCompletePressed}
          onRemovePressed={onRemovePressed}
        />
      ))}
    </div>
  );
  return isLoading ? isLoadingMessage : content;
};
const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(completeTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
