# State and Events

## Objectives

- [ ] Add event handlers to elements in React
- [ ] Use the `useState` hook to create state variables
- [ ] Create event handler callbacks that manipulate `state`
- [ ] Trigger re-renders by setting state
- [ ] Discuss some "gotchas" of working with `useState`: async code and closures

## Outline

- [ ] Review app code
  - Show props destructuring
- [ ] Review [React Docs on Events](https://reactjs.org/docs/events.html)
- [ ] Handle events and introduce state by creating a click counter
- [ ] Use the `useState` hook to create a **state variable**
- [ ] The "gotchas":
  - Show that `setState` is asynchronous
  - Using `setState` with value vs function
  - Stale closures
  - [Examples](https://codesandbox.io/s/setstate-gotchas-89xzd?file=/src/SlowCounter.js:206-1316)

## Deliverables

- [ ] Toggle Dark Mode button text on click
- [ ] **Breakout Exercise** Add a 'like' button to each project card
- [ ] Filter by project name

## Lecture Notes

### Using Events

In vanilla JS, our steps for handling events looked likes this:

1. Find piece of DOM: `const beef = document.getElementById("beef")`
2. Add event listener to that piece: `beef.addEventListener`
3. Give callback to event listener (remove, add, etc.):
   `beef.addEventListener("click", () => {console.log("BEEF!")})`

In React, we don't have to do step 1, we can skip directly to step 2 by adding
event handlers directly to our JSX. We still must supply the event handler with
a callback.

For example, if we're trying to implement a click handler on a button, we could
do so in a Class Component by passing a callback function to the onClick
attribute of an element:

```js
function Counter() {
  return <button onClick={() => console.log("clicked!")}>Click Me</button>;
}
```

Events can only be attached to DOM elements, we can't attach event listeners to
our components:

```js
function Counter() {
  return (
    <div>
      <button onClick={() => console.log("clicked!")}>Click Me</button>
      <MyCustomButton onClick={() => console.log("will never fire")}>
        Click Me
      </MyCustomButton>
    </div>
  );
}
```

We can also create a helper function for the callback:

```js
function Counter() {
  function handleClick(event) {
    console.log(event);
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Synthetic Events

Rather than working with the native `event` object in the browser, React passes
a [Synthetic Event](https://reactjs.org/docs/events.html) object to our event
handlers. Synthetic events ensure that you can use the `event` object in the
same way regardless of browser or machine. This comes back to the
`learn once, write anywhere` principle.

Otherwise, events are more or less the same as they are in vanilla JS.

## State

State is used for data that needs to be dynamic. Where props are passed down
from parents to children and are static, values stored in state are meant to
change, especially as the user interacts with the DOM.

This is a key component of declarative programming in React: we tie our
components to our state by integrating values in state into logic (e.g.
conditional rendering). This way, changes in state eventually cause changes to
the DOM.

To work with state in a function component, we use the `useState` hook:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button>Count: {count}</button>;
}
```

When we call `useState(0)` inside the function component, that creates a new
"state variable" which our function gets access to. That new state variable has
an **initial value** of 0 (or whatever we pass into `useState` when we call it).

`useState` will return an **array** that has two things inside of it:

- `count`: the current value for the state variable
- `setCount`: a _setter_ function so we can update the state variable

We could access those elements from the array individually, like this:

```js
const countState = useState(0);
// => [0, setStateFunction]
const count = countState[0];
const setCount = countState[1];
```

But to clean up the code, React recommends using
[array destructuring][destructuring] to achieve the same result in one line of
code instead of three:

```js
const [count, setCount] = useState(0);
```

We can then use the `count` variable to access that piece of state and display
its current value in the `<button>` element.

### Setting State

To update a state variable, we use its setter function:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

Calling the setter function does two things:

- It updates the state variable to some new value
- It causes our component to **re-render** and update the DOM

### Deciding... should it be state? Where should state be?

From Step 3 of
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html): to decide
what we need as `state`, ask three questions about each piece of data:

- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so,
  it isn’t state.

From Step 4 of Thinking in React: To decide where state should live, for each
piece of state in your application:

- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components
  that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should
  own the state.
- If you can’t find a component where it makes sense to own the state, create a
  new component solely for holding the state and add it somewhere in the
  hierarchy above the common owner component.

## Setting State is Asynchronous

Updates to state are asynchronous - this means that code written immediately
after updating state will not see changes in your state.

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log(count); // => 0
    setCount(count + 1); // => 0 + 1 = 1
    console.log(count); // => 0
    setCount(count + 1); // => 0 + 1 = 1
    console.log(count); // => 0
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

`setState` can take an value OR a function as its first argument. Since
[updates to state and props may be asynchronous](https://reactjs.org/docs/hooks-reference.html#functional-updates),
you should use the function version of `setState` when you intend to use the
previous state or props values when writing the new state values.

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // callback version of setState
    setCount((count) => count + 1); // 0 + 1 = 1
    setCount((count) => count + 1); // 1 + 1 = 2
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

## Stale Closures

In the component below, there are two buttons. The features:

- when Increment is clicked, increase the count by 1 immediately
- when Delayed Increment is clicked, increase the count by 1 after 3 seconds

```js
function SlowCounter() {
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }

  function handleDelayedClick() {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  }

  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleDelayedClick}>Delayed Increment</button>
    </div>
  );
}

export default SlowCounter;
```

Click the Delayed Increment button, then click increment a few times _before_
`setTimeout` resolves. You'll see that count increments as expected with the
Increment button, but then goes back to the old count when Delayed Increment is
clicked. There's a bug in the `handleDelayedClick` implementation!

Explanation:

This is an example of the stale closure problem. In `handleDelayed` count, we
call `setTimeout` and pass a callback function. That function needs access to
the current value of `count`. So the value is _captured_ in the closure, at the
moment the button is clicked. When the callback finally runs, it uses that
captured value, rather than the value from the latest render. You can see this
by adding a debugger in the `setTimeout` callback - notice that when the callback
runs, the value of count doesn't match with what is displayed in the DOM.

Solution:

In `handleDelayedClickCorrectly`, if we use the callback version of `setCount`,
React will pass in the current value of our count state to `setCount` when it
runs.

## Resources

- [React Docs - Events](https://reactjs.org/docs/events.html)
- [React Docs - Hooks](https://reactjs.org/docs/hooks-overview.html)
- [React Docs - Functional State Updates](https://reactjs.org/docs/hooks-reference.html#functional-updates)
- [React Docs - Stale State Problem](https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)
