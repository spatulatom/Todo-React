import React, {useState, useEffect} from 'react';
 
import './App.css';
// Importing components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  
  // State suff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);

// run once when the app starts
 useEffect(()=>{
   getLocalTodos();},[]
 );
  // useEffect. empty array-function will run only once when component first rendered.
  // the power of this function is that 
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
    },[todos, status]
  );
   
  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo)=>todo.completed===true))
        break;
        case "uncompleted":
        setFilteredTodos(todos.filter((todo)=>todo.completed===false))
        break;
        default: 
        setFilteredTodos(todos);
        break;
    }
  }
  // Save to local
const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

const getLocalTodos = () =>{
  if (localStorage.getItem("todos")===null) {
    localStorage.setItem("todos", JSON.stringify([]));
  }else{
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  }
}

  return (
    <div className="App">
      <header>
  <h1>Todo List</h1>
      </header>
      <Form inputText={inputText}  todos={todos} setTodos={setTodos} setInputText={setInputText}
      setStatus={setStatus}  />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>      
    </div>
  );
}

export default App;
