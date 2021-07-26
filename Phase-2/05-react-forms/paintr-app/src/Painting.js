import { useState } from 'react';

function Painting({ painting }) {

  // Initialize "votes" state
  const [votes, votesSetter] = useState(painting.votes);

  // Create callback function to add votes (addVotes)
  function addVotes() {
    votesSetter(votes => votes + 1);
  }

  return (
    <div>
        <img src={painting.image} alt="" />
        <h4>
          "{painting.title}" by {painting.artist.name}
        </h4>a
        <p>Year: {painting.date}</p>
        <p>
          Dimensions: {painting.dimensions.width} in. x {painting.dimensions.height} in.
        </p>

        <div className="ui labeled button" tabIndex="0">

        {/* Call addVotes() via onClick */}
        <div onClick={addVotes} className="ui red button">
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
