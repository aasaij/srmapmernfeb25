import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import AddTask from "./components/AddTask";
import { useRef, useState, useEffect } from "react";
import SearchItem from "./components/SearchItem";
function App() {
  let name = "Todo List";
  const [todoList, setToDoList] = useState([]);
  const URL = "http://localhost:9000/todolist";
  useEffect(() => {
    // let oldTask = localStorage.getItem("todos");
    // if (oldTask) {
    //   setToDoList(JSON.parse(oldTask));
    // }
    setTimeout(() => {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setToDoList(data))
        .catch((err) => console.log(err))
        .finally(() => console.log("finally"));
    }, 2000);
  }, []);

  // let oldTask = localStorage.getItem("todos");
  // if (oldTask) {
  //   todoList = JSON.parse(oldTask);
  // }
  let [newTask, setNewTask] = useState("");
  let [searchItem, setSearchItem] = useState("");
  let inputRef = useRef(null);
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

  let handleSubmit = (e) => {
    e.preventDefault();
    newTask = newTask.trim();
    newTask = newTask
      .split(" ")
      .filter((item) => item.trim() !== "")
      .join(" ");
    if (
      newTask &&
      todoList.filter(
        (todo) => todo.task.toLowerCase() === newTask.toLowerCase()
      ).length === 0
    ) {
      const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
      const newTodo = { id, task: newTask, completed: false };
      const newTodoList = [...todoList, newTodo];
      setToDoList(newTodoList);
      localStorage.setItem("todos", JSON.stringify(newTodoList));
      setNewTask("");
      inputRef.current.focus();
    }
  };

  return (
    <div className="App">
      <Header title={name} />
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <Content
        todoList={todoList.filter((todo) =>
          todo.task.toUpperCase().includes(searchItem.toUpperCase())
        )}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer length={todoList.filter((todo) => !todo.completed).length} />
    </div>
  );
}

export default App;
