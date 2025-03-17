import React from 'react';
import Todo from "../../components/todo/Todo";
import styles from './todosPage.module.css'

function TodosPage() {
    const todos = ["todo 1", "todo 2", "todo 3"];

    return (
        <div className={styles.todosList}>
            <h2 className={styles.title}>Todos List</h2>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    );
}

export default TodosPage;
