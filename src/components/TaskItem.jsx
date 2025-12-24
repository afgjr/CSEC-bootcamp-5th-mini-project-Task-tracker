import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTasks } from '../store/taskContext';

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <li className="task-item">
      <label className="task-item__left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-label={`Mark ${task.text} as completed`}
        />
        <span className={task.completed ? 'task-text task-text--completed' : 'task-text'}>
          {task.text}
        </span>
      </label>

      <button
        className="btn btn-danger"
        onClick={() => deleteTask(task.id)}
        aria-label={`Delete ${task.text}`}
      >
        <DeleteIcon/>
      </button>
    </li>
  );
};

export default TaskItem;
