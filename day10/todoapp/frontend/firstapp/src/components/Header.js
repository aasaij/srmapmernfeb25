// import React from "react";

// function Header() {
//   return <div></div>;
// }
// export default Header;
import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
//setting default values for properties
Header.defaultProps = {
  title: "Todo List",
};
export default Header;
