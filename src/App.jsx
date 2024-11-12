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

  //?? Use tab name or tab index? Does this matter on a larger scale?
  const [selectedTab, setSelectedTab] = useState('Open')

  //handler functions for actions
  function handleTodoAdd(newTodo) {
    // addEventListener(click) to button?
    // create new duplicate array of todos
    // overwrite state with new todos array since state is immutable

    const newTodoList = [...todos, { input: newTodo, complete: false }]
    
    setTodos(newTodoList)

  }

  function handleTodoComplete(index) {
    let newTodoList = []
  }

  function handleTodoDelete(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })

    setTodos(newTodoList)
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TodoList todos={todos} selectedTab={selectedTab} handle
        ={handleTodoDelete} />
      <TodoInput handleTodoAdd={handleTodoAdd} />
    </>
  )
}

export default App
