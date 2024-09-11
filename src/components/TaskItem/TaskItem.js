import './TaskItem.css';

function TaskItem(props) {
  return (
    <li>
      <div>
        <span 
          className={`icon icon-check ${props.completed && "icon-check-active"}`}
          onClick={props.onComplete}
        >
          V
        </span>
      </div>
      <p className={`task-item ${props.completed && "task-item-complete"}`}>{props.text}</p>
      <div>
        <span 
          className='icon icon-delete'
          onClick={props.onDelete}
        >
          X
        </span>
      </div>
    </li>
    );
}

export { TaskItem };