import React from "react";
const Feedback = () => {
  return (
    <form>
      <h1>Feedback Form</h1>
      <div className="form-group">
        <label htmlFor="" className="form-label">
          Your Name
        </label>
        <input type="text" className="form-control" />
        <label htmlFor="" className="form-label">
          Email Id
        </label>
        <input type="email" name="" id="" className="form-control" />
        <label htmlFor="" className="form-label">
          Contact Number
        </label>
        <input type="number" name="" id="" className="form-control" />
      </div>
    </form>
  );
};

export default Feedback;
