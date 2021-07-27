import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("yolo");
  const [filter, setFilter] = useState("sepia");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(`https://cataas.com/cat/says/${text}?filter=${filter}&json=true`)
      .then(response => response.json())
      .then(data => {
        setImage(data.url);
      });
    // 🗑 delete the line below, this is hiding a warning message
  }, []);
  
  // ✅ update the dependencies array!
  // read the warning message (either hover over the [] in VSCode, or look in the console in chrome)
  // add any dependency variables to this array

  // 🚫 no need to update the code below here

  function handleTextSubmit(text) {
    setText(text);
  }

  return (
    <div className="App">
      {image && (
        <img
          src={`https://cataas.com${image}`}
          alt={`A cat saying ${text}`}
          style={{ maxHeight: "50vh" }}
        />
      )}
      <div>
        <CatPicFilters filter={filter} setFilter={setFilter} />
        <CatPicText onTextSubmit={handleTextSubmit} initialText={text} />
      </div>
      <p>
        A cat saying <strong>{text}</strong> with a <em>{filter}</em> filter.
      </p>
    </div>
  );
}

const filters = ["", "blur", "mono", "sepia", "negative", "paint", "pixel"];

function CatPicFilters({ filter, setFilter }) {
  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <select
        id="filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        {filters.map(filter => (
          <option key={filter} value={filter}>
            {filter === "" ? "(none)" : filter}
          </option>
        ))}
      </select>
    </div>
  );
}

function CatPicText({ initialText, onTextSubmit }) {
  const [text, setText] = useState(initialText);

  function handleSubmit(e) {
    e.preventDefault();
    onTextSubmit(text);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Text</label>
      <input
        type="text"
        id="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Update Text</button>
    </form>
  );
}

export default App;
