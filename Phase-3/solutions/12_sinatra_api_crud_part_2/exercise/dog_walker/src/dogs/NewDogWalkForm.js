import React, { useState } from 'react';
import { FaWalking, FaPoop } from 'react-icons/fa';

function NewDogWalkForm({ dog, toggleShowNewDogWalkForm, handleAddDogWalk }) {
  const [walk_time, set_walk_time] = useState('');
  const [pooped, set_pooped] = useState(false);

  console.log({
    walk_time,
    pooped
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      walk_time,
      pooped,
      dog_id: dog.id
    };
    // const res = await fetch(`${process.env.REACT_APP_API_URL}/dog_walks`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body
    // });

    // const newDogWalk = await res.json();

    handleAddDogWalk(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between">
      <span className="pb-1 pt-2 w-32">
        <input
          required
          type="datetime-local"
          onChange={(e) => set_walk_time(e.target.value)}
        />
      </span>
      <span className="flex items-center">
        <label htmlFor="pooped">
          <FaPoop style={{ color: pooped ? '#000' : '#bbb' }} size={20} />
        </label>
        <input
          className="hidden"
          id="pooped"
          type="checkbox"
          onChange={(e) => set_pooped(e.target.checked)}
        />
      </span>
      <span className="flex items-center">
        <button
          className="bg-gray-100 px-4 py-2 mr-2"
          onClick={toggleShowNewDogWalkForm}
        >
          Cancel
        </button>
        <button
          className="flex bg-green-600 px-4 py-2 text-white"
          type="submit"
        >
          <FaWalking size={20} /> Add Walk
        </button>
      </span>
    </form>
  );
}

export default NewDogWalkForm;
