import React from 'react';
import DogListItem from './DogListItem';

function DogsList({ dogs, deleteDog }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {dogs.map((dog) => (
        <DogListItem key={dog.id} dog={dog} deleteDog={deleteDog} />
      ))}
    </div>
  );
}

export default DogsList;
