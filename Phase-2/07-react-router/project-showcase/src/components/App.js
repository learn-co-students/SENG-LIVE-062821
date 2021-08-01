import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";

// react-router-dom Imports
import { Route, Switch } from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddProject(newProject) {
    const newProjectArray = [newProject, ...projects];
    setProjects(newProjectArray);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        title="Science Fair"
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      {/* wouldn't it be nice if these were separate pages? */}
      <Switch>
        <Route path="/projects/new" component={() => <ProjectForm onAddProject={handleAddProject} />} />
        <Route path="/projects/:id" component={() => <ProjectDetail />} />
        <Route path="/projects" component={() => <ProjectList projects={projects} /> } />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
