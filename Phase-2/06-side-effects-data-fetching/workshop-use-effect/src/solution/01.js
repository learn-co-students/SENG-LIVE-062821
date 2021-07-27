import { useEffect, useState } from "react";

function App() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/8")
      .then(r => r.json())
      .then(data => {
        setPics(data.message);
      });
  }, []);

  return (
    <div style={{ padding: "16px" }}>
      <h1>Dog Pics</h1>
      <DogPics pics={pics} />
    </div>
  );
}

function DogPics({ pics }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      {pics.map(pic => (
        <img
          key={pic}
          style={{ width: "100%" }}
          src={pic}
          alt="A random dog from the internet"
        />
      ))}
    </div>
  );
}

export default App;
