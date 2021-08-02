import React, { useState } from "react";

// react-router-dom Imports
import { Link } from "react-router-dom";

function ProjectItem({ project }) {
  
  // Pull ID of Project from props and
  // create appropriate URL using it
  const src = `/projects/${project.id}`

  //  Save Claps via localStorage (START)

  const [claps, setClaps] = useState(parseInt(localStorage.getItem(`claps-${project.id}`)) || 0);

  const { image, name, about, phase } = project;

  function handleClapClick() {
    setClaps(claps + 1);
    localStorage.setItem(`claps-${project.id}`, claps + 1)
  }

  //  Save Claps via localStorage (END)

  return (
    <li className="card">
      <div className="project-image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClapClick}>
          👏{claps}
        </button>
      </div>

      <div className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        <p>
          <Link to={src}>
            Details
          </Link>
        </p>
      </div>

      <div className="extra">
        <span className="badge blue">Phase {phase}</span>
      </div>
    </li>
  );
}

export default ProjectItem;
