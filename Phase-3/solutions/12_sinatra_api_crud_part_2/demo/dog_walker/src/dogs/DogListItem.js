import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaTrash, FaWalking } from 'react-icons/fa';

function DogListItem({
  dog: { id, name, age, breed, image_url },
  dogs,
  setDogs
}) {
  const handleDelete = async (e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/dogs/${id}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json' }
      });

      const parsedBody = await res.json();

      setDogs(dogs.filter((dog) => dog.id !== parsedBody.id));
    }
  };

  return (
    <div className="p-4 shadow text-center flex flex-col justify-between" key={ id }>
      <figure>
        <img
          className="object-cover sm:h-96 xl:h-112 w-full"
          src={image_url}
          alt={name}
        />
        <h1 className="text-2xl my-2">{name}</h1>
        <p>
          {breed} - {age ? `${age} old` : 'age unknown'}
        </p>
      </figure>
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
  );
}

export default DogListItem;
