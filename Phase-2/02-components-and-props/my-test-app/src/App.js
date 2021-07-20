import logo from './logo.svg';
import './App.css';

// Import Header / NavBar Components
import Header from './components/Header';  
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar 
        // isLoggedIn evaluates to true
        // because we have DECLARED it
        isLoggedIn
      />
      <Header 
        // prop = value
        firstName="Louis"
        lastName="Medina"
      />
    </div>
  );
}

export default App;
