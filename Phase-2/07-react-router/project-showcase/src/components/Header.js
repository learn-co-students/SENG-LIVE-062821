import React from "react";

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
      <h1>
        <span className="logo">{logo}</span>
        {title}
      </h1>
      <nav>
        <a className="button" href="/projects">
          All Projects
        </a>
        <a className="button" href="/projects/new">
          Add Project
        </a>
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
