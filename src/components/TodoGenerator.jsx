import { useDispatch } from "react-redux";

import { ADD_TODO } from "../constants/constants";
import { addTodo } from "../apis/todo";

function TodoGenerator() {
  const dispatch = useDispatch();

  function addToList(event) {
    const text = event.target.todo.value;
    event.preventDefault();
    addTodo({ text, done: false }).then((response) => {
      dispatch({ type: ADD_TODO, payload: response.data });
    });
    event.target.todo.value = "";
  }

  return (
    <form className="input-div" onSubmit={(event) => addToList(event)}>
      <input
        type="text"
        name="todo"
        className="todoInput"
        placeholder="input a new todo here"
        required
      ></input>
      <input type="submit" className="Add-button" value="add" />
    </form>
  );
}
export default TodoGenerator;
