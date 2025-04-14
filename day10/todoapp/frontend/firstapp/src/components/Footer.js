import React from "react";

const Footer = ({ length }) => {
  //   let getYear = () =>  new Date().getFullYear();
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <footer>
      <h4>
        {length
          ? "You have " + length + " task(s) to complete"
          : "All tasks are completed"}
      </h4>
      <h4>Copyright &copy; {getYear()}. All rights reserved! </h4>
    </footer>
  );
};

export default Footer;
