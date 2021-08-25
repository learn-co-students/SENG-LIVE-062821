import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import DogsToolBar from './DogsToolBar';
import DogsList from './DogsList';
import NewDogForm from './NewDogForm';
import DogDetail from './DogDetail';
import DogEditForm from './DogEditForm';

function DogsContainer() {
  const history = useHistory();
  const location = useLocation();
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchDogs() {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/dogs`, {
        headers: { Accept: 'application/json' }
      });

      const parsedBody = await res.json();

      setDogs(parsedBody);
    }

    fetchDogs();
  }, []);

  
  const addDog = (formData) => {
    fetch(`${process.env.REACT_APP_API_URL}/dogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newDog => {
        // pessimistically wait to update the state until we have the new dog (and its id) from api
        setDogs(dogs.concat(newDog))
        history.push(`/dogs/${newDog.id}`)
      });
  }
  

  const updateDog = (id, formData) => {
    fetch(`${process.env.REACT_APP_API_URL}/dogs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json()) 
      .then(updatedDog => {
        // pessimistically update the dog in state after we get a response from the api
        setDogs(dogs.map((dog) => (dog.id === parseInt(id) ? updatedDog : dog)));
        history.push(`/dogs/${updatedDog.id}`);
      })
  }

  const deleteDog = (dogId) => {
    if (window.confirm('Are you sure you want to delete this dog?')) {
      // optimistically update the ui
      setDogs(dogs.filter(dog => dog.id !== parseInt(dogId)))
      // update the API
      fetch(`${process.env.REACT_APP_API_URL}/dogs/${dogId}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json' }
      })
        .then(res => res.json())
        .then(deletedDog => {
          console.log('deleted', deletedDog.name)
          if (location.pathname !== "/dogs") {
            history.push("/dogs")
          }
        });
    }
  }

  const addDogWalk = (dogId, formData) => {
    // pessimistically - don't update the DOM until we get the successful response from the API including an id
    fetch(`${process.env.REACT_APP_API_URL}/dog_walks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((newDogWalk) => {
        setDogs(
          dogs.map((dog) => {
            if (dog.id === newDogWalk.dog_id) {
              return {
                ...dog,
                dog_walks: dog.dog_walks.concat(newDogWalk)
              };
            } else {
              return dog;
            }
          })
        );
      });
  };

  const togglePoo = (dogId, dogWalkId) => {
    const dogToUpdate = dogs.find((dog) => dog.id === parseInt(dogId));
    const dogWalkToUpdate = dogToUpdate.dog_walks.find(
      (dw) => dw.id === parseInt(dogWalkId)
    );

    const updatedDogs = dogs.map((dog) => {
      if (dog === dogToUpdate) {
        return {
          ...dogToUpdate,
          dog_walks: dog.dog_walks.map((dogWalk) => {
            if (dogWalk === dogWalkToUpdate) {
              return { ...dogWalkToUpdate, pooped: !dogWalkToUpdate.pooped };
            } else {
              return dogWalk;
            }
          })
        };
      } else {
        return dog;
      }
    });
    // optimistically update the ui to toggle the darkness of the poop icon
    setDogs(updatedDogs);
    // update the API
    fetch(`${process.env.REACT_APP_API_URL}/dog_walks/${dogWalkId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pooped: !dogWalkToUpdate.pooped })
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const deleteDogWalk = (dogId, dogWalkId) => {
    if (window.confirm('Are you sure you want to delete this dog walk?')) {
      const dogToUpdate = dogs.find((dog) => dog.id === parseInt(dogId));
      // optimistically update the ui
      const updatedDogs = dogs.map((dog) => {
        if (dog === dogToUpdate) {
          return {
            ...dogToUpdate,
            dog_walks: dog.dog_walks.filter((dogWalk) => {
              return dogWalk.id !== dogWalkId;
            })
          };
        } else {
          return dog;
        }
      });
      setDogs(updatedDogs);
      // update the API 
      fetch(`${process.env.REACT_APP_API_URL}/dog_walks/${dogWalkId}`, {
        method: 'DELETE'
      });
    }
  };

  return (
    <div className="w-4/5 mx-auto pt-12">
      <DogsToolBar />
      <Switch>
        <Route exact path="/dogs">
          <DogsList dogs={dogs} deleteDog={deleteDog} />
        </Route>
        <Route exact path="/dogs/new">
          <NewDogForm dogs={dogs} addDog={addDog} />
        </Route>
        <Route
          exact
          path="/dogs/:id"
          render={({ match }) => (
            <DogDetail
              togglePoo={togglePoo}
              deleteDogWalk={deleteDogWalk}
              deleteDog={deleteDog}
              addDogWalk={addDogWalk}
              dog={dogs.find((dog) => dog.id === parseInt(match.params.id))}
            />
          )}
        />
        <Route
          exact
          path="/dogs/:id/edit"
          render={({ match }) => (
            <DogEditForm
              dog={dogs.find((dog) => dog.id === parseInt(match.params.id))}
              updateDog={updateDog}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default DogsContainer;
