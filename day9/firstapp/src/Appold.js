// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
// import Counter from "./components/Counter";
import AddTask from "./components/AddTask";
function App() {
  // function greet() {
  //   let nameList = ["Vijay", "Raj", "Ravi", "Rohit"];
  //   let rnd = Math.floor(Math.random() * nameList.length);
  //   return nameList[rnd];
  // }
  // let person = {
  //   firstName: "Aasaithambi",
  //   lastName: "Jay",
  // };
  let name = "Todo List";
  return (
    <div className="App">
      {/* <Counter /> */}
      <Header title={name} />
      <AddTask />
      <Content />
      <Footer />
      {/* <h1 style={{ color: "white", backgroundColor: "red" }}>
        Welcome to world of React
      </h1>
      <h2>Good Morning {greet()}</h2>
      <h3>Today : {"" + new Date()}</h3>
      <h3>My Details : {person.firstName + " " + person.lastName}</h3>
      <h3>{10 === 10}</h3>
      <h2>Thank you so much for being very silent</h2> */}
    </div>
  );
}

export default App;
