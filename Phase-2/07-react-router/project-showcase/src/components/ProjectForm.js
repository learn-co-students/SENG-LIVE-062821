import React, { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [phase, setPhase] = useState(1);
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name,
      about,
      phase,
      link,
      image,
    };

    fetch("http://localhost:3000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newProject) => {
        onAddProject(newProject);
      });
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {name.length === 0 ? (
          <p style={{ color: "red" }}>You must provide a name</p>
        ) : null}

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={about}
          onChange={(event) => setAbout(event.target.value)}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          value={phase}
          onChange={(event) => setPhase(parseInt(event.target.value))}
        >
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;
