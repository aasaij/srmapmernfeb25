import React from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
const AddTask = () => {
  return (
    <div className="addForm">
      <label htmlFor="">Enter Task</label>
      <input type="text" placeholder="Enter Task" />
      <button>
        <FaRegSquarePlus role="button" tabIndex="0" />
      </button>
    </div>
  );
};

export default AddTask;
