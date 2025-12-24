import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { useTasks } from '../store/taskContext';

const TaskInput = () => {
  const { addTask } = useTasks();
  const [text, setText] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText('');
  };

  return (
    <form className="task-input" onSubmit={handleAdd}>
      
      <input
        type="text"
        className="input"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Task text"
      />
      <button type="submit" className="btn btn-primary">
        <AddIcon/>
      </button>
      
    </form>
  );
};

export default TaskInput;
