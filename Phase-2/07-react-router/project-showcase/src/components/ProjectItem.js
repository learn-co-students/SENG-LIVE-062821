import React, { useState } from "react";

function ProjectItem({ project }) {
  const [claps, setClaps] = useState(0);

  const { image, name, about, phase } = project;

  function handleClapClick() {
    setClaps(claps + 1);
  }

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
          <em>Add a link to the detail page here</em>
        </p>
      </div>

      <div className="extra">
        <span className="badge blue">Phase {phase}</span>
      </div>
    </li>
  );
}

export default ProjectItem;
