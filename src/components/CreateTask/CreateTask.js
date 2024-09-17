import './CreateTask.css';
import '../Calendar/Calendar.css';
import React, { useState } from 'react';
import { TaskCalendar } from '../Calendar/Calendar';

// Crea la funcion CreateTask llamando al prop onCreate que le manda App
function CreateTask({ tasks, onCreate, selectedDate, setSelectedDate }) {
    // Crea un estado de React para controlar la entrada
    const [taskText, setTaskText] = useState('');

    // Función para observar los cambios del input
    const handleInputChange = (event) => {
        setTaskText(event.target.value);
    };

    // Función para lanzar la creación de la tarea. prevenDefault evita que se recargue la página al lanzar el formulario. Set task text actualiza a
    // vacío de nuevo el campo input tras la creación de la tarea
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(taskText);
        setTaskText('');
    };

    const formatedDate = (selectedDate) => {
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
        const year = selectedDate.getFullYear();
        return `${day}/${month}/${year}`;
    };
    
    // Render de HTML llamando a las funciones en cuestión
    return (
        <>
            <div className='add-task'>
                <h2>Create new Task <br/>
                {formatedDate(selectedDate)}</h2>
                <form className= "task-form" onSubmit={handleSubmit}>
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
            <div className='calendar'>
                <TaskCalendar
                    tasks = {tasks}
                    selectedDate={selectedDate} 
                    setSelectedDate={setSelectedDate}
                />
            </div>
        </>
    );
}

export { CreateTask };