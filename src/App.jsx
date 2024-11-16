import './App.css'
import './fanta.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'
import { useState } from 'react'

function App() {

  //   const todos = [
  //     { input: 'Yo! Add your first todo!', complete: true },
  //     { input: 'Order more protein powder', complete: false },
  //     { input: 'Learn moar React, nerd!', complete: false },
  //     { input: 'Check on Mom after surgery', complete: true}
  // ]
  
  const [todos, setTodos] = useState(() => {
    try {
      const db = localStorage.getItem('sick-todo-app');
      
      if (db) {
        const parsedData = JSON.parse(db);
        if (parsedData.todos && parsedData.todos.length > 0 && Array.isArray(parsedData.todos)) {
          return parsedData.todos;
        }
      }
      return [{ input: 'Welcome to Netlify!', complete: true }];
    } catch (error) {
      console.error('Error loading todos:', error);
      return [{ input: 'Welcome to Netlify!', complete: true }];
    }
  });

  //?? Use tab name or tab index? Does this matter on a larger scale?
  const [selectedTab, setSelectedTab] = useState('All')

  //handler functions for actions
  function handleTodoAdd(newTodo) {

    const newTodoList = [...todos, { input: newTodo, complete: false }]
    
    setTodos(newTodoList)
    handleSaveData(newTodoList);
  }

  function handleTodoComplete(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleTodoDelete(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })

    setTodos(newTodoList)
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('sick-todo-app', JSON.stringify({ todos: currentTodos }));
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab} />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleTodoDelete={handleTodoDelete}
        handleTodoComplete={handleTodoComplete} />
      <TodoInput
        handleTodoAdd={handleTodoAdd} />
    </>
  )
}

export default App
