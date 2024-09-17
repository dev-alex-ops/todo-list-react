import './TaskItem.css';
import { CompleteIcon } from '../Icon/CompleteIcon';
import { DeleteIcon } from '../Icon/DeleteIcon';

function TaskItem(props) {
  return (
    <li>
      <div className='item-container'>
        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <div className='task-info'>
          <p className={`task-item ${props.completed && "task-item-complete"}`}>{props.text}</p>
        </div>
        <div>
          <DeleteIcon 
            onDelete={props.onDelete}
          />
        </div>
      </div>
    </li>
    );
}

export { TaskItem };