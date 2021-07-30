import React from "react"

function FilterBar({ setPhaseFilter, setProjectSearch }) {
  return (
    <>
      <div className="phase-buttons">
        <button onClick={() => setPhaseFilter("All")}>All</button>
        <button onClick={() => setPhaseFilter(5)}>Phase 5</button>
        <button onClick={() => setPhaseFilter(4)}>Phase 4</button>
        <button onClick={() => setPhaseFilter(3)}>Phase 3</button>
        <button onClick={() => setPhaseFilter(2)}>Phase 2</button>
        <button onClick={() => setPhaseFilter(1)}>Phase 1</button>
      </div>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setProjectSearch(e.target.value)}
      />
    </>
  );
}

export default FilterBar;
