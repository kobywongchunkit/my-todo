import { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";

import {
  REMOVE_TODO,
  UPDATE_TODO,
  HTTP_STATUS_NO_CONTENT,
} from "../constants/constants";
import { deleteTodo, updateTodo } from "../apis/todo";
import TodoUpdateModal from "./TodoUpdateModal";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { id, text, done } = todo;

  function toggleTodo() {
    updateTodo(id, { done: !todo.done }).then((reponse) =>
      dispatch({ type: UPDATE_TODO, payload: reponse })
    );
  }

  function removeTodo(event) {
    event.stopPropagation();
    deleteTodo(id).then((reponse) => {
      if (reponse.status === HTTP_STATUS_NO_CONTENT)
        dispatch({ type: REMOVE_TODO, payload: id });
    });
  }

  const showModal = (event) => {
    event.stopPropagation();
    if (!done) {
      setIsModalVisible(true);
    }
  };

  return (
    <>
      <p className={`TodoItem-todo ${done ? "done" : ""}`} onClick={toggleTodo}>
        {text}{" "}
        <span className="todoItemIcon" onClick={removeTodo}>
          <DeleteOutlined className="antIcon" />
        </span>
        <span
          className={`todoItemIcon ${done ? "done" : ""}`}
          onClick={showModal}
        >
          <FormOutlined className="antIcon" />
        </span>
      </p>
      <TodoUpdateModal
        id={id}
        text={text}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </>
  );
}

export default TodoItem;
