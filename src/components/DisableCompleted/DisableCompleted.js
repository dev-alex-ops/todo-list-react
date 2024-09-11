import './DisableCompleted.css'

function DisableCompleted() {
    return (
        <div className='hide-completed'>
            <p><input type='checkbox'/> Hide completed tasks</p>
        </div>
    );
}

export { DisableCompleted };