import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import WalksToolBar from './WalksToolBar';
import WalksList from './WalksList';
import NewWalkForm from './NewWalkForm';
import WalkDetail from './WalkDetail';


function WalksContainer() {

  const [walks, setWalks] = useState([]);

  useEffect(() => {
    
  }, [])


  return (
    <div className="w-4/5 mx-auto pt-12">
      <WalksToolBar />
      <Switch>
        <Route exact path="/walks">
          <WalksList walks={walks} setWalks={setWalks} />
        </Route>
        <Route exact path="/walks/new">
          <NewWalkForm walks={walks} setWalks={setWalks}/>
        </Route>
        <Route
          exact
          path="/walks/:id"
          render={({ match }) => (
            <WalkDetail
              walks={walks}
              setWalks={setWalks}
              walk={walks.find(walk => walk.id === parseInt(match.params.id))}
            />
          )}
        >
        </Route>
        {/* <Route exact path="/walks/:id/add_dogs"></Route> */}
      </Switch>
    </div>
  );
}

export default WalksContainer;
