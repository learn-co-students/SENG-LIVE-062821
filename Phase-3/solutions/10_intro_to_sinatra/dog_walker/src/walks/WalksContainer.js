import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WalksToolBar from './WalksToolBar';

function WalksContainer() {
  return (
    <div className="w-4/5 mx-auto pt-12">
      <WalksToolBar />
      <Switch>
        <Route exact path="/walks"></Route>
        <Route exact path="/walks/new"></Route>
        <Route exact path="/walks/:id"></Route>
        {/* <Route exact path="/walks/:id/add_dogs"></Route> */}
      </Switch>
    </div>
  );
}

export default WalksContainer;
