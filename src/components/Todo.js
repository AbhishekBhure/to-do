import React from "react";

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
      <div className="flex">
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
