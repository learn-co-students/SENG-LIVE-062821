import { useState } from 'react';

function Painting(props) {

  // Initialize "votes" state
  const [votes, votesSetter] = useState(props.painting.votes);

  // Breakout Activity #2: Create Function to Add Votes (addVotes)
  // ...
  return (
    <div>
      <img src={props.painting.image} />
      <h4>
        "{props.painting.title}" by {props.painting.artist.name}
      </h4>a
      <p>Year: {props.painting.date}</p>
      <p>
        Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
      </p>

      <div class="ui labeled button" tabindex="0">

      {/* Breakout Activity #2: Call addVotes() via onClick */}
        <div class="ui red button">
          <i class="heart icon"></i> Add Vote
        </div>
        <a class="ui basic red left pointing label">
          {votes}
        </a>
      </div>
    </div>
  );
};

export default Painting;
