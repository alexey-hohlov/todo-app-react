import './App.css';
import React from 'react';
import TodoItem from './Todo/TodoItem';
import InputForm from './Todo/InputForm';

function App() {
  
  const [todoItem, setTodoItem] = React.useState([]);

  //Загрузка из localStorage
  React.useEffect(()=>{
    const json = localStorage.getItem("todos");
    const loadedItems = JSON.parse(json);

    if(loadedItems){
      setTodoItem(loadedItems);
    }
  },[]);

  // Сохранение в localStorage
  React.useEffect(()=>{
    const json = JSON.stringify(todoItem);
    localStorage.setItem("todos", json);
  },[todoItem]);

  const editTodo = (index, editedText) =>{
    const newTodos = [...todoItem];
    newTodos[index].text = editedText;
    setTodoItem(newTodos);
  };

  // Используем тут "text" так как в TodoItem для рендеринга
  // используется именно это ключевое слово: "item.text"
  const addTodo = (text) =>{
    const newTodos = [...todoItem, {text}];
    setTodoItem(newTodos);
  };

  const removeTodo = (index) =>{
    const newTodos = [...todoItem];
    newTodos.splice(index, 1);
    setTodoItem(newTodos);
  };

  const toggleTodo = (index) =>{
    const newTodos = [...todoItem];
    newTodos[index].completed = !newTodos[index].completed;
    setTodoItem(newTodos);
  };

  return (
    <div className="wrapper">
      <div className="header">
        <div className="app-title">Todo List</div>
      </div>
        <div className="todo-list">
          {todoItem.map((item, index)=>(
            <TodoItem
            item={item}
            key={index}
            index={index}
            editTodo={editTodo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}/>
          ))}
        </div>
        <InputForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
