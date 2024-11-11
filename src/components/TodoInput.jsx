import { useState } from 'react'

export function TodoInput(props) {

    const { handleTodoAdd } = props
    const [inputValue, setInputValue] = useState('')
    
    return (
        <div className="input-container">
            <input placeholder="Add task" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} />
            <button onClick={
                () => {
                    if (!inputValue) { return } //guard clause to prevent empty todos
                    handleTodoAdd(inputValue)
                    setInputValue('')
                }
            }>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}