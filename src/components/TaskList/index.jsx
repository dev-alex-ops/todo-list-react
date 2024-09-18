import './TaskList.css';

function TaskList({ children }) {
    return (
        <ul>
            {children}
        </ul>
    );
}

export { TaskList };