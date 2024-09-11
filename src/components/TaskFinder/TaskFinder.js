import React from 'react';
import './TaskFinder.css';

function TaskFinder({tasks, searchValue, setSearchValue}) {
    if (tasks.length === 0) {
        return (
            <div className='finder no-tasks'>
                <h4>Search your task:</h4>
                <input 
                    placeholder="Search Task" 
                    className='search-bar'
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }}
                />
            </div>
        );
    } else {
        return (
            <div className='finder'>
                <h4>Search your task:</h4>
                <input 
                    placeholder="Search Task" 
                    className='search-bar'
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }}
                />
            </div>
        );
    }
    
}

export { TaskFinder };