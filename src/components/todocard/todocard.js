import React from 'react';
import styles from './todocard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Todocard(props) {

    return (
                <div key={props.task._id} className={styles.container}>
                    <div className={styles.content}>
                        <h2>{props.task.title}</h2>
                        <p className={styles.time}>{props.task.createdAt}</p>
                        <p>{props.task.description}</p>
                    </div>
                    <div>
                       <button className={styles.button} onClick={() => props.handleDelete(props.task._id)}><FontAwesomeIcon icon="trash"/></button>
                    </div>
                </div>
    );
}
