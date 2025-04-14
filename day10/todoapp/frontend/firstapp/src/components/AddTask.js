import React from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
const AddTask = ({ newTask, setNewTask, handleSubmit, inputRef }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="">Enter Task</label>
      <input
        type="text"
        ref={inputRef}
        autoFocus
        placeholder="Enter Task"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button type="submit">
        <FaRegSquarePlus role="button" tabIndex="0" />
      </button>
    </form>
  );
};

export default AddTask;
