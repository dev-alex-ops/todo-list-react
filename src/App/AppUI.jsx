import React from "react";
import './App.css';
import { TaskCounter } from '../components/TaskCounter';
import { TaskFinder } from '../components/TaskFinder';
import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';
import { CreateTask } from '../components/CreateTask';
import { TaskCalendar } from '../components/Calendar';

function AppUI({
    tasks,
    createTask,
    date,
    setDate,
    completedTasks,
    totalTasks,
    searchValue,
    setSearchValue,
    filteredList,
    completeTask,
    deleteTask,
    loading,
    error,
}) {
    return (
        <>
        <div className='bg-wrapper'></div>
        <div className='main-wrapper'>
            <div className='task-wrapper'>
                <CreateTask
                    tasks = {tasks}
                    onCreate = {createTask}
                    selectedDate = {date}
                    setSelectedDate = {setDate} 
                />
                <TaskCalendar
                    className = 'calendar'
                    tasks = {tasks}
                    selectedDate={date} 
                    setSelectedDate={setDate}
                />
            </div>
            
            <div className='list-wrapper'>
            <TaskCounter 
                completed={completedTasks} 
                total={totalTasks}
                selectedDate={date}
            />
            <TaskFinder
                tasks = {tasks}
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
            />

            <TaskList>
                {loading && <h3>Loading...</h3>}
                {error && <h3>We got some troubles...</h3>}

                {filteredList
                .sort ((a, b) => {
                    if (a.completed === b.completed) {
                    return 0;
                    }
                    return a.completed ? 1 : -1;
                })
                .map(item => (
                    <TaskItem 
                    key={item.text} 
                    text={item.text}
                    completed={item.completed}
                    onComplete={() => completeTask(item.text)}
                    onDelete={() => deleteTask(item.text)}
                    />
                ))}
            </TaskList>
            </div>
            
        </div>
        </>
    );
}

export { AppUI };