import { TodoCard } from './TodoCard'

export function TodoList(props) {

    const { todos } = props

    const tab = 'All'

    const filteredTodosList = tab === 'All' ?
        todos :
        tab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <div className="todoList">

            <>
                {filteredTodosList.map((todo,todoIndex) => {
                    return (
                        <TodoCard key={todoIndex}
                            todoIndex={todoIndex}
                            {...props} />
                    )
                })}
            </>

        </div>
    )
}