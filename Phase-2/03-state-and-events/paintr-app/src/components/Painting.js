import { useState } from 'react';
import Button from './Button';

function Painting({ painting }) {
  // States
  // const [ VARIABLE NAME OF STATE, SETTER FUNCTION ] = useState(DEFAULT VALUE OF STATE)

  // Create a state to keep track of whether Painting has been added to Cart
  // const [ isAdded, setAdded ] = useState(false); 

  // Create a state to keep track of Likes
  // const [ isLiked, setLiked ] = useState(false); 

  // Create a State to handle Painting info visibility
  const [ isVisible, setVisibility ] = useState(true);

  function setPaintingInfo() {
    return (
      <>
        <img src={painting.image} />
        <h4>
          "{painting.title}" by {painting.artist.name}
        </h4>
        <p>Year: {painting.date}</p>
        <p>
          Dimensions: {painting.dimensions.width} in. x {painting.dimensions.height} in.
        </p>
      </>
    )
  }

  // Create a Callback Function to contain setVisiblity 
  function visibilityHandler() {
    setVisibility(!isVisible);
  }

  return (
    <div>
      { isVisible ? setPaintingInfo() : <h2>Added To Cart</h2> }
      
      {/* <button onClick={() => setAdded(!isAdded)}>
        { isAdded ? "Remove From Cart" : "Add To Cart"}
      </button>
      <button onClick={() => setLiked(!isLiked)}>
        { isLiked ? "Liked" : "Like"}
      </button> */}

      {/* Pass "name" prop to Button Component to handle
      Button label appearance */}
      <Button 
        name="cart"
        visibilityHandler={visibilityHandler}
      />
      <Button 
        name="like" 
      />
    </div>
  );
};

export default Painting;
