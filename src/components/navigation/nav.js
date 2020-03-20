import React from 'react';
import styles from './nav.module.css';

function nav() {
    return (
        <div className={styles.container}>
            <h5>To Do<br></br>Tracker</h5>
            <div className={styles.buttons}>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default nav;
