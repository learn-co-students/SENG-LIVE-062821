import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import NewDogWalkForm from './NewDogWalkForm';
import { FaPencilAlt, FaTrash, FaPoop, FaPlus } from 'react-icons/fa';

function DogDetail({
  dog = {},
  togglePoo,
  addDogWalk,
  deleteDogWalk,
  deleteDog
}) {
  const { id, name, age, breed, image_url, dog_walks } = dog;
  const [showNewDogWalkForm, setShowNewDogWalkForm] = useState(false);

  const toggleShowNewDogWalkForm = () => {
    setShowNewDogWalkForm(!showNewDogWalkForm)
  }

  const handleAddDogWalkSubmit = (formData) => {
    addDogWalk(id, formData)
    toggleShowNewDogWalkForm()
  }

  const handlePooClick = (dogWalkId) => {
    togglePoo(id, dogWalkId)
  };

  return (
    <div className="grid sm:grid-cols-3 gap-8">
      <div className="p-4 shadow text-center">
        <img className="object-cover w-full" src={image_url} alt={name} />
        <h1 className="text-2xl my-2">{name}</h1>
        <p>
          {breed} - {age ? `${age} old` : 'age unknown'}
        </p>
        <div className="mt-4 flex justify-end">
          <Link className="flex items-center mr-2" to={`/dogs/${id}/edit`}>
            <FaPencilAlt size={20} />
          </Link>
          <button
            onClick={() => deleteDog(id)}
            className="flex items-center mr-2"
          >
            <FaTrash size={20} />
          </button>
        </div>
      </div>
      <div className="sm:col-span-2">
        <h1 className="text-2xl flex items-center">
          Walks{' '}
          {!showNewDogWalkForm ? (
            <FaPlus
              onClick={toggleShowNewDogWalkForm}
              className="ml-2 cursor-pointer"
            />
          ) : null}
        </h1>

        <ul className="space-y-4">
          {dog_walks?.map((dogWalk) => (
            <li
              key={dogWalk.id}
              className="flex items-bottom justify-between border-b-2 py-2"
            >
              <Link to={`/walks/${dogWalk.walk_id}`} className="pb-1 pt-2 w-44">
                {dogWalk.formatted_time}
              </Link>
              <span className="flex items-center">
                <button onClick={() => handlePooClick(dogWalk.id)}>
                  <FaPoop
                    style={{ color: dogWalk.pooped ? '#000' : '#bbb' }}
                    size={20}
                  />
                </button>
              </span>
              <span className="flex items-center">
                <button onClick={() => deleteDogWalk(id, dogWalk.id)}>
                  <FaTrash size={20} />
                </button>
              </span>
            </li>
          ))}
          {showNewDogWalkForm && (
            <li key="theNewDogWalkForm">
              <NewDogWalkForm
                dog={dog}
                toggleShowNewDogWalkForm={toggleShowNewDogWalkForm}
                handleAddDogWalk={handleAddDogWalkSubmit}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DogDetail;
