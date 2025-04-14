import React from "react";

const Footer = () => {
  //   let getYear = () =>  new Date().getFullYear();
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <footer>
      <h4>Copyright &copy; {getYear()}. All rights reserved! </h4>
    </footer>
  );
};

export default Footer;
