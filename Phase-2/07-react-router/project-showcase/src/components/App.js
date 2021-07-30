import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";

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
      <Home />
      <ProjectForm onAddProject={handleAddProject} />
      <ProjectList projects={projects} />
      <ProjectDetail />
    </div>
  );
}

export default App;
