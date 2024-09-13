import './CreateTask.css';
import photo from '../../assets/task2.png';
import React, { useState } from 'react';

function CreateTask({ onCreate }) {
    const [taskText, setTaskText] = useState('');

    const handleInputChange = (event) => {
        setTaskText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(taskText);
        setTaskText('');
    };
    
    return (
        <>
            <div className='add-task'>
                <h2>Create &nbsp; new Task</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        placeholder="Add task"
                        value={taskText}
                        onChange={handleInputChange}
                    />
                    <button 
                        type='submit'
                    >Create</button>
                </form>
            </div>    
            <div className='task-photo'>
                <img src={photo} alt="productivity"/>
            </div>
        </>
    );
}

export { CreateTask };