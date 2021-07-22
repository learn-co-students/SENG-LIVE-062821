import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';
import PaintingsList from './components/PaintingsList';
import paintings from './painting_data';

function App() {
  return (
    <div>
      <NavBar
        color="red"
        title="Paintr"
        icon="paint brush"
        description="an app we made"
      />
      <PaintingsList paintings={paintings} />
    </div>
  );
}

export default App;
