import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import WalksToolBar from './WalksToolBar';
import WalksList from './WalksList';
import NewWalkForm from './NewWalkForm';
import WalkDetail from './WalkDetail';


function WalksContainer() {
  const history = useHistory();
  const location = useLocation();
  const [walks, setWalks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/walks`)
      .then(res => res.json())
      .then(walks => {
        setWalks(walks)
      })
  }, [])

  const handleDelete = (walkId) => {
    if (window.confirm("Are you sure you want to delete this walk?")) {

      fetch(`${process.env.REACT_APP_API_URL}/walks/${walkId}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(deletedWalk => {
          setWalks(walks.filter((walk) => walk.id !== deletedWalk.id));
          if (location.pathname !== "/walks") {
            history.push("/walks")
          }
        })
    }
  }

  const addWalk = (formData) => {
    fetch(`${process.env.REACT_APP_API_URL}/walks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((walk) => {
        setWalks(walks.concat(walk));
        history.push(`/walks/${walk.id}`);
      });
  }

  const togglePoo = (walkId, dogWalkId) => {
    const walk = walks.find(walk => walk.id === parseInt(walkId))
    const dogWalkToUpdate = walk.dog_walks.find(dog_walk => dog_walk.id === parseInt(dogWalkId))
    const updatedWalks = walks.map((walk) => {
      if (walk.id === walkId) {
        return {
          ...walk,
          dog_walks: walk.dog_walks.map((dogWalk) => {
            if (dogWalk.id === dogWalkId) {
              return { ...dogWalk, pooped: !dogWalkToUpdate.pooped };
            } else {
              return dogWalk;
            }
          })
        };
      } else {
        return walk;
      }
    });
    // optimistically render the update
    setWalks(updatedWalks);
    // update the API
    fetch(`${process.env.REACT_APP_API_URL}/dog_walks/${dogWalkId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pooped: !dogWalkToUpdate.pooped })
    })
      .then(res => res.json())
      .then(console.log);
  }


  return (
    <div className="w-4/5 mx-auto pt-12">
      <WalksToolBar />
      <Switch>
        <Route exact path="/walks">
          <WalksList walks={walks} handleDelete={handleDelete} />
        </Route>
        <Route exact path="/walks/new">
          <NewWalkForm walks={walks} addWalk={addWalk}/>
        </Route>
        <Route
          exact
          path="/walks/:id"
          render={({ match }) => (
            <WalkDetail
              togglePoo={togglePoo}
              walk={walks.find(walk => walk.id === parseInt(match.params.id))}
            />
          )}
        >
        </Route>
      </Switch>
    </div>
  );
}

export default WalksContainer;
