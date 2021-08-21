import React from 'react';
import NewDogButton from './NewDogButton';
import { BsGrid3X2GapFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'

function DogsToolBar() {
  return (
    <div className="grid grid-cols-2 py-1 border-b-2 mb-4">
      <div className="text-left">
        <Link to="/dogs" className="pr-2 py-2 flex items-center">
          <BsGrid3X2GapFill className="mr-2" size="20" /> All Dogs
        </Link>
      </div>
      <div className="flex justify-end">
        <NewDogButton />
      </div>
    </div>
  );
}

export default DogsToolBar;
