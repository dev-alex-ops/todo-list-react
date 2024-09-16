import Calendar from 'react-calendar';

function TaskCalendar({ selectedDate, setSelectedDate}) {

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);  
    console.log('Entra')
  }

  return (
    <div>
      <Calendar onChange={handleDateChange} value={selectedDate}/>
    </div>
  );
}

export { TaskCalendar };