import React from 'react';
import TaskItem from './TaskItem';
import { useTasks } from '../store/taskContext';

const TaskList = () => {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return <p className="empty">No tasks yet. Add your first one above.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </ul>
  );
};

export default TaskList;
