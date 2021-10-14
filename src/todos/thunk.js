import {
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch(
      "https://tickets.wivunika.com/api/v1/all_places.php"
    );
    const todos = await response.json();
    const { Places } = todos;
    console.log(Places);
    dispatch(loadTodosSuccess(Places));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};
export const displayAlert = (e) => {
  alert(e);
};
