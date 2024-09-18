import Calendar from 'react-calendar';
import moment from 'moment';
import { useEffect, useState } from 'react';

function TaskCalendar({ tasks, selectedDate, setSelectedDate}) {
  const [monthlyTasks, setMonthlyTasks] = useState([]);
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  useEffect(() => {
    const selectedMonth = moment(activeStartDate).format('MM/YYYY');

    const filteredDates = tasks.filter( item => {
      const taskDate = moment(item.date, 'DD/MM/YYYY').format('MM/YYYY');
      return taskDate === selectedMonth;
    });

    setMonthlyTasks(filteredDates);
  }, [ activeStartDate, tasks]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  }

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setActiveStartDate(activeStartDate);
  };

  const dates = tasks.map(item => item.date);

  return (
    <div className='calendar-wrapper'>
      <h3 className='month-tasks'>This Month's Tasks: {monthlyTasks.length}</h3>
      <Calendar 
        onChange={handleDateChange} 
        value={selectedDate}
        onActiveStartDateChange={handleActiveStartDateChange}
        tileClassName={({date, view}) => {
          if (view === 'month') {
            const formatedDate = moment(date).format("DD/MM/yyyy");
            if (dates.includes(formatedDate)) {
              return 'highlight';
            }
          }
          return null;
        }}
      />
    </div>
  );
}

export { TaskCalendar };