import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaTrash, FaWalking, FaPoop } from 'react-icons/fa';

function DogDetail({ dog = {}, dogs, setDogs }) {
  const { id, name, age, breed, image_url } = dog;

  const [dog_walks, set_dog_walks] = useState([
    {
      time: "Friday, 7/30 2:00 PM",
      number_two: false
    },
    {
      time: "Thursday, 7/29 9:00 AM",
      number_two: true
    }
  ]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_API_URL}/dogs/${id}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' }
    });

    const parsedBody = await res.json();

    setDogs(dogs.filter((dog) => dog.id !== parsedBody.id));
  };

  return (
    <div className="grid sm:grid-cols-3 gap-8">
      <div className="p-4 shadow text-center">
        <img className="object-cover w-full" src={image_url} alt={name} />
        <h1 className="text-2xl my-2">{name}</h1>
        <p>
          {breed} - {age} old
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
              onClick={handleDelete}
              className="flex items-center mr-2"
              href={`/dogs/${id}`}
            >
              <FaTrash size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <h1 className="text-2xl">Walks</h1>
        <ul className="space-y-4">
          {dog_walks.map((dog_walk) => (
            <li className="flex items-bottom justify-between border-b-2 py-2">
              <span className="pb-1 pt-2 w-44">{dog_walk.time}</span>
              <span className="flex items-center">
                <FaPoop
                  style={{ color: dog_walk.number_two ? '#000' : '#bbb' }}
                  size={20}
                />
              </span>
              <span className="flex items-center">
                <FaTrash size={20} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DogDetail;
