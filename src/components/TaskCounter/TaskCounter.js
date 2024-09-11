import './TaskCounter.css';

function TaskCounter({ total, completed }) {
    if (total === 0) {
        return (
            <div className='main-title'>
                <h1>Your Tasks</h1>
                <h3>You don't have tasks yet!</h3>
            </div>
        ); 
    } 
    if (completed === total) {
        return (
            <div className='main-title'>
                <h1>Your Tasks</h1>
                <h3>You completed all your tasks!</h3>
            </div>
        );
    } else {
        return (
            <div className='main-title'>
                <h1>Your Tasks</h1>
                <h3><span className='completed'>{completed}</span> of <span className='total'>{total}</span> tasks completed:</h3>
            </div>
        );
    }
    
}

export { TaskCounter };