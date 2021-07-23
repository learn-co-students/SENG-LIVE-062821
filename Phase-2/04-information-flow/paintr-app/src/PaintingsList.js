import Painting from './Painting';

function PaintingsList({ paintings }) {
  // { paintings } => looks inside props object, find a key of "paintings"
  //                  create a new variable "paintings" and assign the value
  //                  associated with the "paintings" key.

  // props = { paintings: [...,...] }
  
  return(
    <div>
      <h1>Paintings</h1>
      {
        paintings.map(painting => (
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
