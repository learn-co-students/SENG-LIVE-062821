import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import DogsToolBar from './DogsToolBar';
import DogsList from './DogsList';
import NewDogForm from './NewDogForm';
import DogDetail from './DogDetail';
import DogEditForm from './DogEditForm';

function DogsContainer() {
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

  return (
    <div className="w-4/5 mx-auto pt-12">
      <DogsToolBar />
      <Switch>
        <Route exact path="/dogs">
          <DogsList dogs={dogs} setDogs={setDogs} />
        </Route>
        <Route exact path="/dogs/new">
          <NewDogForm dogs={dogs} setDogs={setDogs} />
        </Route>
        <Route
          exact
          path="/dogs/:id"
          render={({ match }) => (
            <DogDetail
              dog={dogs.find((dog) => dog.id === parseInt(match.params.id))}
            />
          )}
        />
        <Route
          exact
          path="/dogs/:id/edit"
          render={({ match }) => (
            <DogEditForm
              dogs={dogs}
              dog={dogs.find((dog) => dog.id === parseInt(match.params.id))}
              setDogs={setDogs}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default DogsContainer;
