import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import edit from "../svg/edit.svg";
import del from "../svg/del.svg";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <img
          src={edit}
          alt="edit"
          className="svg"
          title="edit"
          onClick={() => editTodo(task.id)}
        />
        <img
          src={del}
          alt="delete"
          className="svg"
          title="delete"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
