import './App.css';
import './index.css';
import { TaskCounter } from './components/TaskCounter/TaskCounter';
import { TaskFinder } from './components/TaskFinder/TaskFinder';
import { TaskList } from './components/TaskList/TaskList';
import { TaskItem } from './components/TaskItem/TaskItem';
import { CreateTask } from './components/CreateTask/CreateTask';
import { DisableCompleted } from './components/DisableCompleted/DisableCompleted';
import React from 'react';

function App() {
  // Función para establecer una fecha
  const [date, setDate] = React.useState(new Date());


  // Declaración de los estados de React para observar las tareas y el campo de búsqueda
  const [tasks, setTask] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  // Contador de tareas completadas
  const completedTasks = tasks.filter(
    item => !!item.completed
  ).length;

  // Contador total de tareas
  const totalTasks = tasks.length;

  // Filtro para el buscador de tareas
  const filteredList = tasks.filter(
    (item) => {
      return item.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
    }
  );

  // Función para completar (y descompletar) tareas
  const completeTask = (text) => {
    const newTasks = [ ...tasks ];
    const taskIndex = newTasks.findIndex(
      (item) => item.text === text
    )
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    setTask(newTasks);
  };

  // Función para crear tareas
  const createTask = (text) => {
    const duplicatedTask = (text) => {
      return tasks.find((item) => item.text === text)
    }
    
    if (text.trim() !== ''){
      if (!duplicatedTask(text)) {
        const newTasks = [ ...tasks, {text: text, date: date, completed: false}];
        setTask(newTasks);
        console.log(newTasks);
      }
    }
  }

  // Función para borrar tareas
  const deleteTask = (text) => {
    const newTasks = [ ...tasks ];
    const taskIndex = newTasks.findIndex(
      (item) => item.text === text
    )
    newTasks.splice(taskIndex, 1);
    setTask(newTasks);
  };

  // Render de HTML
  return (
    <>
      <div className='bg-wrapper'></div>
      <div className='main-wrapper'>
        <div className='task-wrapper'>
          <CreateTask
            onCreate = {createTask}
            selectedDate = {date}
            setSelectedDate = {setDate} 
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
