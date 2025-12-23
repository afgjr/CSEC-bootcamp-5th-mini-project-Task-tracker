import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <section className="page page-home">
      <TaskInput />
      <TaskList />
    </section>
  );
};

export default Home;
