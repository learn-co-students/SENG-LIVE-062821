# React Data Flow

## Objectives

- [ ] Draw a component hierarchy and describe the Flow of Information
- [ ] Decide which components should have state
- [ ] Pass data _up_ with callbacks, and _down_ with props

## Outline

- [ ] Demonstrate inverse data flow
  - Implement Dark Mode feature
  - **Check for understanding**: [exercise](https://codesandbox.io/s/inverse-data-flow-exercise-039fu?file=/src/App.js)
  - Refactor a filter component out of `ProjectList` and implement inverse data flow

### Process: Building React Features With State

1. Decide: Do we need state for this feature? If so, where?
2. Set up the initial state. What's a good initial value? What will we see on
   the page first? How will it change?
3. Set up component to render something based on state. Do we need conditional
   rendering?
4. Find a way to update state dynamically (based on user interaction; fetching data; etc).

### Process: Using Inverse Data Flow

1. Define a event handler in the child component
2. Define a callback function in the parent component
3. Pass the callback function as a prop to the child
4. Call the callback in the event handler with whatever data we're sending up

### Inverse Data Flow

In React, we only have one way to share information between multiple components:
`props`. We've seen how to use props to send data from a parent component to a child component, like this:

```js
function Parent() {
  const [search, setSearch] = useState("");

  // passing search down as a prop
  return <Child search={search} />;
}

function Child({ search }) {
  return (
    <div>
      <p>You searched for: {search}</p>
    </div>
  );
}
```

It's also helpful to be able to pass data **up** from a child to a parent. In
React, the only way to achieve this is by sending a **callback function** down
from the parent to the child via `props`, and **call** that callback function in
the child to send up data that we need.

First, we need to define a callback function in the parent component:

```js
function Parent() {
  const [search, setSearch] = useState("");

  function handleSearchChange(newValue) {
    // do whatever we want with the data (usually setting state)
    setSearch(newValue);
  }

  return <Child search={search} />;
}
```

Then, we need to pass a **reference** to the function down as a **prop** to the
child component:

```js
function Parent() {
  const [search, setSearch] = useState("");

  function handleSearchChange(newValue) {
    setSearch(newValue);
  }

  // pass down a reference to the function as a prop
  return <Child search={search} onSearchChange={handleSearchChange} />;
}
```

In our child component, we'll be able to call the callback function with
whatever data we want to send up to the parent:

```js
function Child({ search, onSearchChange }) {
  return (
    <div>
      <p>You searched for: {search}</p>

      {/* call onSearchChange and pass up some data */}
      <input type="text" onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  );
}
```

### Lifting State

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

- Often, several components need to reflect the same changing data. We recommend
  lifting the shared state up to their closest common ancestor.
- If two sibling components need access to the same `state`, you will want to
  place the shared `state` in a parent container. Then you can pass down that
  `state` as well as any functions that need to modify the state as props to the
  two sibling components that need to display and/or change that data.
