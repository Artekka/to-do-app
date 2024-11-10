export function TodoCard(props) {

    const { todoIndex, todos } = props
    const todo = todos[todoIndex]
    console.log(todo)
    return (
        <div className="todoCard card todo-item">
            
            <p> {todo.input}</p>

            <div className="todo-buttons">
                <button disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button>
                    <h6>Delete</h6>
                </button>
            </div>
    </div>
    )
}