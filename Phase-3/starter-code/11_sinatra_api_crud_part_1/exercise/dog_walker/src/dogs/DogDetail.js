import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import NewDogWalkForm from './NewDogWalkForm';
import { FaPencilAlt, FaTrash, FaWalking, FaPoop, FaPlus } from 'react-icons/fa';

function DogDetail({ dog = {}, dogs, setDogs }) {
  const { id, name, age, breed, image_url } = dog;
  const history = useHistory()
  const [dogWalks, setDogWalks] = useState([]);
  const [error, setError] = useState(null);
  const [showNewDogWalkForm, setShowNewDogWalkForm] = useState(false);

  const toggleShowNewDogWalkForm = () => {
    setShowNewDogWalkForm(!showNewDogWalkForm)
  }

  const addDogWalk = (dogWalk) => {
    setDogWalks([...dogWalks, dogWalk])
    toggleShowNewDogWalkForm()
  }

  useEffect(() => {
    async function fetchDogWalks() {
      if (!id) return;
      const res = await fetch(`${process.env.REACT_APP_API_URL}/dogs/${id}`);
      const { dog_walks } = await res.json();

      setDogWalks(dog_walks);
    }
    fetchDogWalks();
  }, [id]);

  const handleDogDelete = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_API_URL}/dogs/${id}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' }
    });

    const parsedBody = await res.json();

    setDogs(dogs.filter((dog) => dog.id !== parsedBody.id));

  };

  const handlePooClick = async (dogWalkId) => {
    const dogWalk = dogWalks.find(dw => dw.id === dogWalkId);
    togglePoo(dogWalk);
    
    const res = await fetch(`${process.env.REACT_APP_API_URL}/dog_walks/${dogWalkId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({pooped: !dogWalk.pooped})
    });

    // if something is wrong with the response, display an error to our users.
  };

  const togglePoo = (dw) => {
    const updatedDogWalks = dogWalks.map((dogWalk) => {
      if (dogWalk.id === parseInt(dw.id)) {
        return { ...dogWalk, pooped: !dw.pooped };
      } else {
        return dogWalk;
      }
    });
    setDogWalks(updatedDogWalks);
  };

  const handleDogWalkDelete = async (dogWalkId) => {
    if (window.confirm("Are you sure you want to delete this dog walk?")) {
      console.log('put delete code here')
      setDogWalks(dogWalks.filter(dw => dw.id !== dogWalkId));
      const res = await fetch(`${process.env.REACT_APP_API_URL}/dog_walks/${dogWalkId}`, {
        method: 'DELETE'
      })
      // if something is wrong with the response then show an error message
      if (!res.ok) {
        setError('Something went wrong')
      }
    }
  }
 

  return (
    <div className="grid sm:grid-cols-3 gap-8">
      <div className="p-4 shadow text-center">
        <img className="object-cover w-full" src={image_url} alt={name} />
        <h1 className="text-2xl my-2">{name}</h1>
        <p>
          {breed} - {age ? `${age} old` : 'age unknown'}
        </p>
        <div className="grid grid-cols-2 mt-4">
          <Link
            to={`/dogs/${id}`}
            className="text-white bg-green-600 px-4 py-2 flex justify-center"
          >
            <FaWalking size={20} />
            Walks
          </Link>
          <div className="flex justify-end">
            <Link className="flex items-center mr-2" to={`/dogs/${id}/edit`}>
              <FaPencilAlt size={20} />
            </Link>
            <a
              onClick={handleDogDelete}
              className="flex items-center mr-2"
              href={`/dogs/${id}`}
            >
              <FaTrash size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <h1 className="text-2xl flex items-center">Walks {!showNewDogWalkForm ? <FaPlus onClick={toggleShowNewDogWalkForm} className="ml-2 cursor-pointer" /> : null}</h1>

        <ul className="space-y-4">
          {dogWalks.map((dogWalk) => (
            <li key={dogWalk.id} className="flex items-bottom justify-between border-b-2 py-2">
              <span className="pb-1 pt-2 w-44">{dogWalk.formatted_time}</span>
              <span className="flex items-center">
                <button onClick={() => handlePooClick(dogWalk.id)}>
                  <FaPoop
                    style={{ color: dogWalk.pooped ? '#000' : '#bbb' }}
                    size={20}
                  />
                </button>
              </span>
              <span className="flex items-center">
                <button onClick={() => handleDogWalkDelete(dogWalk.id)}><FaTrash size={20} /></button>
              </span>
            </li>
          ))}
          {showNewDogWalkForm && (
            <li key='theNewDogWalkForm'>
              <NewDogWalkForm
                dog={dog}
                toggleShowNewDogWalkForm={toggleShowNewDogWalkForm}
                addDogWalk={addDogWalk}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DogDetail;
