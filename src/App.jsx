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
  
  const [todos, setTodos] = useState([
    { input: 'Initial test todo item', complete: true }
  ]);

  //handler functions for actions
  function handleTodoAdd(newTodo) {
    // addEventListener(click) to button?
    // create new duplicate array of todos
    // overwrite state with new todos array since state is immutable

    const newTodoList = [...todos, { input: newTodo, complete: false }]
    
    setTodos(newTodoList)

  }

  function handleTodoEdit() {

  }

  function handleTodoDelete() {

  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput handleTodoAdd={handleTodoAdd} />
    </>
  )
}

export default App
