import React from 'react';
import styles from './description.module.css'

function Description(props) {
    return (
        <div className={styles.description}>
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
        </div>
    );
}

export default Description;