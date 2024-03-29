import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  // const handleChange = (e) => {
  //     setValue(e.target.value);

  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  };

  return (
    <form
      className="TodoForm flex justify-center align-middle my-6"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="todo-input"
        placeholder="What's the Task Today..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
