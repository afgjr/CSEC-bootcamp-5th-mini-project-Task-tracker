import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TaskIcon from '@mui/icons-material/Task';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import { Link, NavLink } from 'react-router-dom';
import { useTasks } from '../store/taskContext';

const Header = () => {
  const { theme, toggleTheme } = useTasks();

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="app-title">
          <h1> <AssignmentIcon/> Task Tracker</h1>
        </Link>
      </div>

      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            'nav-link' + (isActive ? ' nav-link--active' : '')
          }
          end
        >
          <HomeIcon/>
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            'nav-link' + (isActive ? ' nav-link--active' : '')
          }
        >
          <TaskIcon/>
        </NavLink>
      </nav>

      <div className="header__right">
        <button
          aria-label="Toggle dark mode"
          className="btn btn-toggle"
          onClick={toggleTheme}
        >
          {theme === 'dark' ?  < LightModeIcon/>: <DarkModeIcon/>}
        </button>
      </div>
    </header>
  );
};

export default Header;
