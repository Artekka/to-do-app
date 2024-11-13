export function TodoCard(props) {

    const { todo, handleTodoDelete, todoIndex } = props
    return (
        <div className="todoCard card todo-item">
            
            <p> {todo.input}</p>

            <div className="todo-buttons">
                <button disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleTodoDelete(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
    </div>
    )
}