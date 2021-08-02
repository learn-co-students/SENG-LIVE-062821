import { useState } from "react";
// ✅ remember to import the styled-components library!
import styled from "styled-components";

// ✅ create two components using styled-components: a div and a button
// ✅ use the inline styles from the elements below to create the CSS rules for your components
// 📃 https://styled-components.com/docs/basics#getting-started


export default function App() {
  const [count, setCount] = useState(0);

  // ✅ remove the style prop from the div and the button
  // ✅ replace the JSX elements with your styled components
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        display: "grid",
        placeContent: "center",
        gap: "16px",
        background: "skyblue",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      <button
        style={{
          background: "dodgerblue",
          padding: "16px",
          fontSize: "1rem",
          border: "2px solid black",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        Clicks: {count}
      </button>
      <button
        style={{
          background: "dodgerblue",
          padding: "16px",
          fontSize: "1rem",
          border: "2px solid black",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        Clicks: {count}
      </button>
    </div>
  );
}
