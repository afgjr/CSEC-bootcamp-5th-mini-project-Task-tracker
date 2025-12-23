import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTasks } from '../store/taskContext';

const Header = () => {
  const { theme, toggleTheme } = useTasks();

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="app-title">
          <h1>Task Tracker</h1>
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
          Home
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            'nav-link' + (isActive ? ' nav-link--active' : '')
          }
        >
          Stats
        </NavLink>
      </nav>

      <div className="header__right">
        <button
          aria-label="Toggle dark mode"
          className="btn btn-toggle"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
