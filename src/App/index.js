import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';


import '../index.css';

function App() {
  // Declaración de los estados de React para observar las tareas y el campo de búsqueda
  const {
    data: tasks, 
    saveData: setTasks,
    loading,
    error
  } = useLocalStorage('tasks', []);
  const [searchValue, setSearchValue] = React.useState('');
  // Función para establecer una fecha
  const [date, setDate] = React.useState(new Date());

  const formatedDate = (selectedDate) => {
    const day = String(selectedDate.getDate()).padStart(2, '0');
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
    const year = selectedDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Filtro para mostrar únicamente las tareas de un día específico
  const todayList = tasks.filter(
    (item) => {
      return item.date === formatedDate(date)
    }
  )

  // Contador de tareas completadas
  const completedTasks = todayList.filter(
    item => !!item.completed
  ).length;

  // Contador total de tareas
  const totalTasks = todayList.length;
  
  // Filtro para el buscador de tareas
  const filteredList = todayList.filter(
    (item) => {
      return item.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
    }
  );

  

  // Función para completar (y descompletar) tareas
  const completeTask = (text) => {
    const newTasks = [ ...tasks ];
    const taskIndex = newTasks.findIndex(
      (item) => item.text === text && item.date === formatedDate(date)
    )
    if (taskIndex !== -1) {
      newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
      setTasks(newTasks);
    }
  };

  // Función para crear tareas
  const createTask = (text) => {
    const duplicatedTask = (text) => {
      return todayList.find((item) => item.text.toLocaleLowerCase() === text.toLocaleLowerCase())
    }
    if (text.trim() !== ''){
      if (!duplicatedTask(text)) {
        const newTasks = [ ...tasks, {text: text, date: formatedDate(date), completed: false}];
        setTasks(newTasks);
      }
    }
  }

  // Función para borrar tareas
  const deleteTask = (text) => {
    const newTasks = [ ...tasks ];
    const taskIndex = newTasks.findIndex(
      (item) => item.text === text && item.date === formatedDate(date)
    )
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  // Render de HTML
  return (
    <AppUI 
      tasks={tasks}
      createTask={createTask}
      date={date}
      setDate={setDate}
      completedTasks={completedTasks}
      totalTasks={totalTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredList={filteredList}
      completeTask={completeTask}
      deleteTask={deleteTask}
      loading={loading}
      error={error}
    />
    
  );
}

export default App;
