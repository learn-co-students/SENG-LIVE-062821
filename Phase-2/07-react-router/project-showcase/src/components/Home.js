import { useEffect, useState } from "react";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((r) => r.json())
      .then((projects) => {
        setProjects(projects.slice(-3).reverse());
      });
  }, []);

  return (
    <section>
      <div className="box">
        <h2 style={{ fontSize: "3rem" }}>View Awesome Projects.</h2>
        <p>
          Looking for someone to hire? Check out these awesome projects from
          Flatiron students.
        </p>
        <h3>Recent Projects:</h3>
        {projects.map((project) => (
          <p key={project.id}>{project.name}</p>
        ))}
        <div style={{ margin: "1rem 0" }}>
          <a className="button" href="/projects">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
