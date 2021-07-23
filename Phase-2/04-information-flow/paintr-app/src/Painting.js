import { useState } from 'react';

function Painting(props) {

  // Initialize "votes" state
  const [votes, votesSetter] = useState(props.painting.votes);

  // Breakout Activity #2: Create Function to Add Votes (addVotes)
  // ...
  function addVotes() {
    votesSetter(votes => votes + 1);
    // scale
    // new
    // behaviors
  }

  return (
    <div>
      <img src={props.painting.image} alt="" />
      <h4>
        "{props.painting.title}" by {props.painting.artist.name}
      </h4>a
      <p>Year: {props.painting.date}</p>
      <p>
        Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
      </p>

      <div className="ui labeled button" tabIndex="0">

      {/* Breakout Activity #2: Call addVotes() via onClick */}
        <div className="ui red button" onClick={addVotes}>
          <i className="heart icon"></i> Add Vote
        </div>
        <button className="ui basic red left pointing label">
          {votes}
        </button>
      </div>
    </div>
  );
};

export default Painting;
