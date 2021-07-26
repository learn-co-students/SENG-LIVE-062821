import Painting from './Painting';

function PaintingsList(props) {
  return(
    <div>
      <h1>Paintings</h1>
      <hr />
      {
        props.paintings.map(painting => (
          <Painting
            key={painting.id}
            painting={painting}
          />
        ))
      }
    </div>
  );
}

export default PaintingsList;
