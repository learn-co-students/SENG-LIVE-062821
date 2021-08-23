import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function EditDogForm({ dogs, dog = {}, setDogs }) {
  const history = useHistory();
  const [name, setName] = useState(dog.name);
  const [age, setAge] = useState(dog.age);
  const [breed, setBreed] = useState(dog.breed);
  const [image_url, setImageUrl] = useState(
    dog.image_url
  );
  const {id} = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_API_URL}/dogs/${dog.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        age,
        breed,
        image_url
      })
    });

    const parsedBody = await res.json();
    setDogs(dogs.map(dog => dog.id === parseInt(id) ? parsedBody : dog));
    history.push('/dogs');
  };
  return (
    <>
      <h1 className="text-3xl mb-3">New Dog</h1>
      <form
        onSubmit={handleSubmit}
        className="text-2xl flex-col space-y-8 items-center"
      >
        <fieldset className="flex flex-grow mr-2 my-2">
          <label className="text-right w-28" for="name">
            Name
          </label>
          <input
            type="text"
            className="flex-grow border-b-2 ml-4 outline-none"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset className="flex flex-grow mr-2 my-2">
          <label className="text-right w-28" for="age">
            Age
          </label>
          <input
            type="text"
            className="flex-grow border-b-2 ml-4 outline-none"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </fieldset>
        <fieldset className="flex flex-grow mr-2 my-2">
          <label className="text-right w-28" for="breed">
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
          <label className="text-right w-28" for="image_url">
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
        </fieldset>

        <button
          className="block relative lg:-top-2 w-100 left-1 px-4 py-2 text-center bg-green-600 text-white"
          type="submit"
        >
          Update
        </button>
      </form>
    </>
  );
}

export default EditDogForm;
