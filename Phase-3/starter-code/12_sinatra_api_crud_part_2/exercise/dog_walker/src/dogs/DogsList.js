import React from 'react';
import DogListItem from './DogListItem';

function DogsList({ dogs, setDogs }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {dogs.map((dog) => (
        <DogListItem key={dog.id} dog={dog} dogs={dogs} setDogs={setDogs} />
      ))}
    </div>
  );
}

export default DogsList;
