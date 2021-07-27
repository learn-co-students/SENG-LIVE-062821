import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Running side effect");
    // ✅ save the interval to a variable
    setInterval(() => {
      console.log("Setting state");
      setTime(new Date());
    }, 1000);

    return function cleanup() {
      console.log("Running cleanup");
      // ✅ clear the interval so state is no longer updated
    };
  }, []);

  console.log("Component rendered");

  return <div>{time.toString()}</div>;
}

// 🚫 no need to touch the code for this component!

function App() {
  const [isShowingClock, setIsShowingClock] = useState(true);

  function toggle() {
    setIsShowingClock(isShowingClock => !isShowingClock);
  }

  return (
    <div>
      {isShowingClock ? <Clock /> : null}
      <button onClick={toggle}>{isShowingClock ? "Hide" : "Show"} Clock</button>
    </div>
  );
}

export default App;
