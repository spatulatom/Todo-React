import React from 'react';

const Form = ({setInputText,todos,setTodos,inputText,setStatus}) =>{
    // here we can js code and function
    const inputTextHandler=(e) =>{
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
          // ...todos means that if there are any todos - pass them along,
    // as wthat after coma we spacify whats next
            ...todos,
            {text:inputText, completed:false, id: Math.random() *1000}
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
      setStatus(e.target.value)
    }
    
    return(  
        <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
         
    )    }
  export default Form; 