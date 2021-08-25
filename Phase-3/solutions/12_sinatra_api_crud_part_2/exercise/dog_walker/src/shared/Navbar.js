import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-blue-100">
      <nav className="w-4/5 mx-auto">
        <NavLink className="inline-block p-4 -ml-4" to="/dogs">Dogs</NavLink>
        <NavLink className="inline-block p-4" to="/walks">Walks</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
