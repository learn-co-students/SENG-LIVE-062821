import React from 'react';
import DogListItem from './DogListItem';

function DogsList({ dogs, setDogs }) {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {dogs.map((dog) => (
        <DogListItem dog={dog} dogs={dogs} setDogs={setDogs} />
      ))}
    </div>
  );
}

export default DogsList;
