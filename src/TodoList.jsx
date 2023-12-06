import React, { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo(""); // Para limpiar el input después de agregar un todo
    };

    const handleResetTodos = () => {
        setTodos([]);
    };

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleResetTodos}>Reset Todos</button>
        </div>
    );
}

export default TodoList;
