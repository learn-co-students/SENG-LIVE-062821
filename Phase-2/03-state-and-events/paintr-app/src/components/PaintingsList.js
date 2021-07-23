import Painting from './Painting';

function PaintingsList({ paintings }) {
  return (
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
};

export default PaintingsList;
