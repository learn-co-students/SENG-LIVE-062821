import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';


function NewWalkForm({walks, setWalks}) {

  const today = new Date();
  const date = today.getFullYear()+'-'+('0' + (today.getMonth() + 1)).slice(-2)+'-'+today.getDate();
  const timeString = ('0' + today.getHours()).slice(-2) + ":" + today.getMinutes();
  const dateTime = date + 'T' + timeString;
  const history = useHistory()
  const [time, setTime] = useState(dateTime)
  const [dogIds, setDogIds] = useState([])
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
   
  }

  const handleCheckboxChange = (event) => {
    const dogId = parseInt(event.target.value);
    if (event.target.checked) {
      setDogIds(dogIds.concat(dogId))
    } else {
      setDogIds(dogIds.filter(id => id !== dogId))
    }
  }

  return (
    <div>
      <h1 className="text-center text-2xl">New Walk</h1>
      <form
        onSubmit={handleSubmit}
        className="text-2xl flex-col space-y-8 items-center"
      >
        <fieldset className="flex flex-grow mr-2 my-2">
          <label className="text-right w-28" htmlFor="time">
            Time
          </label>
          <input
            type="datetime-local"
            className="flex-grow border-b-2 ml-4 outline-none"
            name="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </fieldset>
        <h2 class="mr-28">Which Dogs do you want to take?</h2>
        <fieldset className="flex flex-grow mr-2 my-2">
          <label className="text-right w-28" htmlFor="dogs">
            Dogs
          </label>
          <div className="grid sm:grid-cols-6 gap-4">
            {dogs?.map(dog => (
              <label
                className={`text-sm p-2 ${dogIds.includes(dog.id)? ' bg-green-400' : ''}`}
                key={dog.id}
                htmlFor={`dog-${dog.id}`}
              >
                <img
                  src={dog.image_url}
                  alt={dog.name}
                  title={dog.name}
                  className={`cursor-pointer object-cover h-36`}
                />{dog.name}
                <input
                  type="checkbox"
                  className="hidden"
                  id={`dog-${dog.id}`}
                  value={dog.id}
                  onChange={handleCheckboxChange}
                />
              </label>
            ))}
            
          </div>
        </fieldset>

        {/* 
       
        <fieldset className="flex flex-grow mr-2 my-2">
          <label className="text-right w-28" htmlFor="breed">
            Breed
          </label>
          <input
            type="text"
            className="flex-grow border-b-2 ml-4 outline-none"
            name="breed"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </fieldset>
        <fieldset className="flex flex-grow mr-2 my-2">
          <label className="text-right w-28" htmlFor="image_url">
            Image Url
          </label>
          <input
            type="text"
            className="flex-grow border-b-2 ml-4 outline-none"
            name="image_url"
            id="image_url"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </fieldset> */}

        <button
          className="block relative lg:-top-2 w-100 left-1 px-4 py-2 text-center bg-green-600 text-white"
          type="submit"
        >
          Add Walk
        </button>
      </form>
    </div>
  )
}

export default NewWalkForm
