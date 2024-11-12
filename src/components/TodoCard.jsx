export function TodoCard(props) {

    const { todo } = props
    return (
        <div className="todoCard card todo-item">
            
            <p> {todo.input}</p>

            <div className="todo-buttons">
                <button>
                    <h6>Done</h6>
                </button>
                <button>
                    <h6>Delete</h6>
                </button>
            </div>
    </div>
    )
}