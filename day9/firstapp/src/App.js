import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import AddTask from "./components/AddTask";
import { useState } from "react";
function App() {
  let name = "Todo List";
  const [todoList, setToDoList] = useState([
    {
      id: 1,
      task: "Learn React",
      completed: false,
    },
    {
      id: 2,
      task: "Learn Vue",
      completed: false,
    },
    {
      id: 3,
      task: "Learn Angular",
      completed: false,
    },
    {
      id: 4,
      task: "Learn Node",
      completed: true,
    },
  ]);
  // let oldTask = localStorage.getItem("todos");
  // if (oldTask) {
  //   todoList = JSON.parse(oldTask);
  // }
  //event handling for check box
  let handleChange = (id) => {
    let newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setToDoList(newTodoList);
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  };
  let handleDelete = (id) => {
    let newTodoList = todoList.filter((todo) => todo.id !== id);
    setToDoList(newTodoList);
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  };

  return (
    <div className="App">
      <Header title={name} />
      <AddTask />
      <Content
        todoList={todoList}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
