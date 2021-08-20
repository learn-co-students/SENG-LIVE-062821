import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Navbar from './shared/Navbar';
import DogsContainer from './dogs/DogsContainer';
import WalksContainer from './walks/WalksContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/dogs">
          <DogsContainer />
        </Route>
        <Route path="/walks">
          <WalksContainer />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </Router>
  );
}

export default App;
