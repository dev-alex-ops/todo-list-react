import './TaskItem.css';
import { CompleteIcon } from '../CompleteIcon/CompleteIcon';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';

function TaskItem(props) {
  return (
    <li>
      <div className='item-container'>
        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        />
      </div>
        <p className={`task-item ${props.completed && "task-item-complete"}`}>{props.text}</p>
      <div>
        <DeleteIcon 
          onDelete={props.onDelete}
        />
      </div>
    </li>
    );
}

export { TaskItem };