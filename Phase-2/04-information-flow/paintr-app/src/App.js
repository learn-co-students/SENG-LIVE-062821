// https://semantic-ui.com/
import 'semantic-ui-css/semantic.min.css';

// import all data from "painting_data.js"
import paintingsData from './painting_data'

// import useState Hook
import React, { useState } from 'react';

// Compontent Imports
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import PaintingForm from './PaintingForm'

function App() {

  // Initialize "color", "paintings", and "formView" states
  const [color, colorSetter] = useState("red");
  const [paintings, paintingsSetter] = useState(paintingsData);
  const [formView, formViewSetter] = useState(false);

  // useState("red") => Return an Array
  // const [color, colorSetter] => Array Destructuring

  // Create function to change Parent's "color" state (changeColor)
  function changeColor() {
    // console.log("changeColor fired!");
    colorSetter('blue');
    // ...
    // some more code
  }

  // Breakout Activity #1: Create Function to Toggle Between PaintingForm / PaintingsList (toggleForm)
  // ...
  function toggleForm() {
    // console.log("toggleForm fired!")
    formViewSetter(!formView);
  }

  // Create function to sort Paintings by number of votes
  function sortPaintings() {
    
    // Store PaintingsData into a variable and use a reference
    // point for sorting logic
    let originalList = [...paintingsData];

    // Sort originalList by number of votes
    const sortedList = originalList.sort((currentPainting, nextPainting) => {
      let votesCurrentPainting = currentPainting.votes;
      let votesNextPainting = nextPainting.votes;

      // Compare the two vote amounts
      // -1 => if a < b
      if (votesCurrentPainting < votesNextPainting) return -1;
      
      // 1 => if a > b
      if (votesCurrentPainting > votesNextPainting) return 1;

      // 0 => if a = b
      return 0;
    });

    // Update value of Paintings state to reflect a sorted list
    paintingsSetter(sortedList);
  }

  return (
    <div>
      <NavBar
        color={color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"

        // Pass changeColor() as prop to NavBar
        changeColor={changeColor}
      />

      {/* Add toggleForm click behavior */}
      <button onClick={toggleForm}>Show/Hide New Painting Form</button>
      <button onClick={sortPaintings}>Sort Paintings</button>
      
      <hr />

      {/* Breakout Activity #1: Render PaintingForm or PaintingsList Components based upon toggleForm */}
      {/* ... */}

      { formView ? <PaintingForm /> : <PaintingsList paintings={paintings} /> }
    </div>
  );
}

export default App;
