import React from "react";
import { FaTrashCan } from "react-icons/fa6";
const Content = ({ todoList, handleChange, handleDelete }) => {
  return (
    <main>
      {todoList.length > 0 ? (
        <ul>
          {todoList.map((todo) => (
            <li className="item" key={todo.id}>
              <input
                type="checkbox"
                onChange={() => handleChange(todo.id)}
                checked={todo.completed}
              />
              <label
                htmlFor=""
                onDoubleClick={() => handleChange(todo.id)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.task}
              </label>
              <FaTrashCan
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(todo.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Nothing to do</h1>
      )}
    </main>
  );
};

// student.ccc.training
// https://bit.ly/CCC-AH

export default Content;
