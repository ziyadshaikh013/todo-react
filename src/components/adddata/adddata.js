import React, { useState } from 'react';
import styles from './adddata.module.css'
import Axios from 'axios';

export default function Adddata(props) {

    const initialState = { title: '', description: ''}

    const[value, setValue] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        if((!value.title && !value.description) || (!value.title)){return};

        Axios.post(`${props.url}/api/create`, value);
        setValue(initialState);
        props.handleAdd();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue( input => ({...input, [name]: value}));
    }

    return (
        <div className={ styles.adddata }>
            <h1>New Task</h1>
            <form onSubmit={ handleSubmit }>
                <input type="text" value={value.title} name="title" placeholder="Enter new task title" onChange={handleChange}></input>
                <textarea value={value.description} name="description" placeholder="Enter new task description" onChange={handleChange}></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
