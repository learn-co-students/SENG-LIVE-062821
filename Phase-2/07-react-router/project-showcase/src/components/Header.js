import React from "react";

// react-router-dom Imports
import { NavLink, Link } from 'react-router-dom';

function Header({
  title,
  logo = "//",
  isDarkMode,
  onDarkModeClick,
  currentUser,
  setCurrentUser,
}) {
  function login() {
    fetch("http://localhost:3000/login", {
      method: "POST",
    })
      .then((r) => r.json())
      .then(setCurrentUser);
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <header>
      <Link to="/" className="button">
        <h1>
          <span className="logo">{logo}</span>
          {title}
        </h1>
      </Link>
      <nav>

        {/* Add NavLinks along with custom "activeStyle" rules */}
        <NavLink className="button" to="/projects" exact activeStyle={{color: "blue"}}>
          All Projects
        </NavLink>
        <NavLink className="button" to="/projects/new" exact activeStyle={{color: "blue"}}>
          Add Project
        </NavLink>
        {currentUser ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
        <button onClick={onDarkModeClick}>
          {isDarkMode ? (
            <span role="img" label="sun">
              ☀️
            </span>
          ) : (
            <span role="img" label="moon">
              🌙
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
