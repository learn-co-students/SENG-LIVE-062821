import React from 'react'
import { FaTrash, FaPoop } from 'react-icons/fa';


function WalkDetail({ walk = {}, togglePoo, handleDelete }) {
  const { id, formatted_time, dog_walks } = walk;

  const handlePooClick = (dogWalkId) => {
    togglePoo(id, dogWalkId);
  };

  return (
    <div>
      <h1 className="flex justify-between text-2xl">Walk on {formatted_time} <span className="flex items-center">
        <button onClick={() => handleDelete(id)}><FaTrash size={20} /></button>
      </span></h1>

      <ul className="grid sm:grid-cols-3">
        {dog_walks?.map((dogWalk) => (
          <li key={dogWalk.id} className="flex items-bottom justify-between border-b-2 py-2">
            <span className="pb-1 pt-2 text-center">
              <img
                src={dogWalk.dog.image_url}
                alt={dogWalk.dog.name}
                className="w-20"
              />
              {dogWalk.dog.name}
            </span>
            <span className="flex items-center">
              <button className="p-8" onClick={() => handlePooClick(dogWalk.id)}>
                <FaPoop
                  style={{ color: dogWalk.pooped ? '#000' : '#bbb' }}
                  size={20}
                />
              </button>
            </span>
            {/* */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WalkDetail
