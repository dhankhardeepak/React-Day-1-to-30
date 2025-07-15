import React, { useEffect, useRef, useState } from 'react'

const Todo = () => {
    const [inputVal, setInputVal] = useState('');
    const [todoList, setTodoList] = useState(['first Todo']);
    const [error, setError] = useState(null);
    const inputRef = useRef()

    const onTodoSubmit = (e) => {
        e.preventDefault();
        if (inputVal == '') {
            setError("Please fill the input value first.");
            return;
        }
        const todoCopy = [...todoList];
        todoCopy.push(inputVal);
        setTodoList(todoCopy);
        setInputVal('')
    }

    const deleteTodo = (id) => {
        console.log(id)
        const todoCopy = [...todoList];
        const todoFiltered = todoCopy.filter((val, idx) => {
            return idx != id;
        })
        setTodoList(todoFiltered);
    }
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <form onSubmit={onTodoSubmit}>
                <label htmlFor='todo'>Add Todo</label>
                <input
                    name='todo'
                    ref={inputRef}
                    value={inputVal}
                    onChange={(e) => {
                        setInputVal(e.target.value);
                        setError('')
                    }} />
                    {error ? <span style={{ color: "red" }}>{error}</span> : null}
            </form>
            
            {todoList && todoList.length ? <div>
                <ul>
                    {todoList.map((listItem, id) => (
                        <li key={id}>{listItem} <span style={{ color: "red", marginLeft: "10px" }} onClick={() => deleteTodo(id)}>Delete</span></li>
                    ))}
                </ul>
            </div> : <p>No List To show here...Please add some Todo's</p>}
        </div>
    )
}

export default Todo
