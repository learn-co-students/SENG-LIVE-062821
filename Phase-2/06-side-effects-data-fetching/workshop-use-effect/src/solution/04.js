import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(intervalId);
    };
  }, []);

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
