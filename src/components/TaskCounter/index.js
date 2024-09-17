import './TaskCounter.css';

function TaskCounter({ total, completed, selectedDate }) {

    const formatedDate = (selectedDate) => {
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
        const year = selectedDate.getFullYear();
        return `${day}/${month}/${year}`;
    };

    if (total === 0) {
        return (
            <div className='main-title'>
                <h1>Your Tasks</h1>
                <h2>{formatedDate(selectedDate)}</h2>
                <h3>You don't have tasks yet!</h3>
            </div>
        ); 
    } 
    if (completed === total) {
        return (
            <div className='main-title'>
                <h1>Your Tasks</h1>
                <h2>{formatedDate(selectedDate)}</h2>
                <h3>You completed all your tasks!</h3>
            </div>
        );
    } else {
        return (
            <div className='main-title'>
                <h1>Your Tasks</h1>
                <h2>{formatedDate(selectedDate)}</h2>
                <h3><span className='completed'>{completed}</span> of <span className='total'>{total}</span> tasks completed:</h3>
            </div>
        );
    }
    
}

export { TaskCounter };