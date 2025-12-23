import React from 'react';
import { useTasks } from '../store/taskContext';

const Stats = () => {
  const { stats } = useTasks();
  const { total, completed, remaining } = stats;

  return (
    <section className="page page-stats">
      <h2>Task Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{total}</div>
          <div className="stat-label">Total tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{completed}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{remaining}</div>
          <div className="stat-label">Remaining</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
