import './App.css';
import { TaskCounter } from './components/TaskCounter/TaskCounter';
import { TaskFinder } from './components/TaskFinder/TaskFinder';
import { TaskList } from './components/TaskList/TaskList';
import { TaskItem } from './components/TaskItem/TaskItem';
import { CreateTask } from './components/CreateTask/CreateTask';
import { DisableCompleted } from './components/DisableCompleted/DisableCompleted';
import React from 'react';

function App() {
  const [tasks, setTask] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTasks = tasks.filter(
    item => !!item.completed
  ).length;

  const totalTasks = tasks.length;

  const filteredList = tasks.filter(
    (item) => {
      return item.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
    }
  );

  const completeTask = (text) => {
    const newTasks = [ ...tasks ];
    const taskIndex = newTasks.findIndex(
      (item) => item.text === text
    )
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    setTask(newTasks);
  };

  const createTask = (text) => {
    const duplicatedTask = (text) => {
      return tasks.find((item) => item.text === text)
    }
    
    if (text.trim() !== ''){
      if (!duplicatedTask(text)) {
        const newTasks = [ ...tasks, {text: text, completed: false}];
        setTask(newTasks);
      }
    }
  }

  const deleteTask = (text) => {
    const newTasks = [ ...tasks ];
    const taskIndex = newTasks.findIndex(
      (item) => item.text === text
    )
    newTasks.splice(taskIndex, 1);
    setTask(newTasks);
  };

  return (
    <>
      <div className='bg-wrapper'></div>
      <div className='main-wrapper'>
        <div className='task-wrapper'>
          <CreateTask
            onCreate = {createTask}
          />
        </div>
        
        <div className='list-wrapper'>
          <TaskCounter 
            completed={completedTasks} 
            total={totalTasks}
          />
          <TaskFinder
            tasks = {tasks}
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />

          <TaskList>
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
          <DisableCompleted/>
        </div>
        
      </div>
    </>
    
  );
}

export default App;
