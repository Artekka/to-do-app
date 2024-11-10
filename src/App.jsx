import './App.css'
import './fanta.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'

function App() {

  const todos = [
    { input: 'Yo! Add your first todo!', complete: true },
    { input: 'Order more protein powder', complete: false },
    { input: 'Learn moar React, nerd!', complete: false },
    { input: 'Check on Mom after surgery', complete: true}
]

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
    </>
  )
}

export default App
