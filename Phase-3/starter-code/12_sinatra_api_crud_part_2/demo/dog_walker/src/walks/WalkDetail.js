import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FaPencilAlt, FaTrash, FaWalking, FaPoop, FaPlus } from 'react-icons/fa';


function WalkDetail({ walk = {}, walks, setWalks }) {
  const { id, formatted_time, dog_walks } = walk;
  const [dogWalks, setDogWalks] = useState([]);
  const history = useHistory();

  const handlePooClick = async (dogWalkId) => {
    const dogWalk = dog_walks.find(dw => dw.id === dogWalkId);
    togglePoo(dogWalk);
    
    const res = await fetch(`${process.env.REACT_APP_API_URL}/dog_walks/${dogWalkId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({pooped: !dogWalk.pooped})
    });

    // if something is wrong with the response, display an error to our users.
  };

  const togglePoo = (dw) => {
    const updatedWalks = walks.map(walk => {
      if (walk.id === id) {
        return {
          ...walk,
          dog_walks: walk.dog_walks.map(dogWalk => {
            if (dogWalk.id === dw.id) {
              return { ...dogWalk, pooped: !dw.pooped };
            } else {
              return dogWalk
            }
          })
        }
      } else {
        return walk
      }
    })
    setWalks(updatedWalks)
  };

  const handleWalkDelete = () => {
    if (window.confirm("Are you sure you want to delete this walk?")) {
      setWalks(walks.filter(walk => walk.id !== id));
      fetch(`${process.env.REACT_APP_API_URL}/walks/${id}`, {
        method: 'DELETE'
      })
      
      history.push("/walks")
    }
  }

  return (
    <div className="">
      <div>
        <h1 className="flex justify-between text-2xl">Walk on {formatted_time} <span className="flex items-center">
                <button onClick={handleWalkDelete}><FaTrash size={20} /></button>
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
          {/* {showNewDogWalkForm && (
            <li key='theNewDogWalkForm'>
              <NewDogWalkForm
                dog={dog}
                toggleShowNewDogWalkForm={toggleShowNewDogWalkForm}
                addDogWalk={addDogWalk}
              />
            </li>
          )} */}
        </ul>
      </div>
    </div>
  )
}

export default WalkDetail
