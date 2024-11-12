import { TodoCard } from './TodoCard'

export function TodoList(props) {

    const { todos, selectedTab } = props

    const filteredTodosList = selectedTab === 'All' ?
        todos :
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <div className="todoList">

            <>
                {filteredTodosList.map((todo,todoIndex) => {
                    return (
                        <TodoCard
                            key={todoIndex}
                            todo={todo} />
                    )
                })}
            </>

        </div>
    )
}