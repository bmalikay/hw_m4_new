import React from 'react';
import styles from './todo.module.css'
function Todo(props) {
    return (
        <div className={styles.todoItem}>
            <p>{props.todo}</p>
        </div>
    );
}

export default Todo;
