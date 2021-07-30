# React Router

## Objectives

- [ ] Create a multi-page SPA
- [ ] Explain the advantages of using React Router
- [ ] Utilize the most common `react-router` components to build a SPA:
      `BrowserRouter`, `Route`, `Switch`, `Link`, and `NavLink`
- [ ] Use hooks like `useHistory` and `useParams` to access the state of the router
- [ ] Use the `history` object to navigate pages
- [ ] Create dynamic routes and use `params`

## Outline

- [ ] Discuss SPA architecture: Pros & Cons of Client-Side Routing
- [ ] Add client side routing
  - BrowserRouter
  - Route
  - Switch
  - Link/NavLink
  - Dynamic Routes/params
  - History

## Lecture Notes

### Frontend Routes

Decide what frontend routes we want:

- `<Home>`
- `<ProjectForm>`
- `<ProjectList>`
- `<ProjectDetail>`

### Static vs Dynamic Routing

**Why do we even need routes?**

- The user can use forward/back to navigate your app
- The user can navigate via urls
- We can make urls describe the action that the user might be taking
- Users can bookmark urls

**What are the drawbacks to client-side routing?**

- We're loading all of our frontend at once, so it might add to the initial load time
- We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

### HTML5 History API

At a low level, React Router takes advantage of the fact that we can programmatically interact with the browser's url with the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API).

You can manipulate the URL in your browser with these:

```js
window.history.back(); // go back
window.history.forward(); // go forward
window.history.pushState({}, "", "pets"); // go to the /pets page
```

We can also interact with the URL using the Location API:

```js
console.log(window.location.pathname);
// => "/pets"
```

Combine that with `if/else` logic and tracking history and you get `react-router`.

## Using React Router

```sh
npm install react-router-dom
```

### Creating a Router

To set up our application to use a router, we wrap our ENTIRE application in a
`Router` component:

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```

React Router is essentially a
[Context Provider](https://reactjs.org/docs/context.html) that gives your other
components access to the history object so you have access to additional
information to perform routing logic.

Note that there are several kinds of routers:

- **BrowserRouter**: gives nicest looking URLs, but can be trickier to deploy
  (check your host's documentation on client side routing to see how to
  configure it if you need this style of URL).
- **HashRouter**: all urls start with a # at the beginning. Easier to configure
  for deploying, but has some limitations.

IMO, it's worth the extra effort to get BrowserRouter working!

### Creating Routes

Once your Router component is set up, you can create separate routes that will
each be responsible for showing separate components. If we want to use the
following routes in our application:

- "/" - `HomePage` component
- "/about" - `AboutPage` component

In the code below, we're relying on two components from React Router to set up
these different routes:

- `Switch`: Looks through all its child Route components and returns the first
  one that matches the current URL (like a `switch` statement in JavaScript)
- `Route`: Uses a prop of _path_ to compare with the current URL; if the path
  matches the url, it will render a component based on its _component_ or
  _render_ prop
  - Use `exact` prop if you only want exact matches!

```js
// App.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import UserPage from "./UserPage";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar /> {/* NavBar will be displayed on all routes */}
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/users/:name">
          <UserPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}
```

### Making Links

Since we're implementing client side routing, we can't rely on just making
regular `<a>` tags to navigate between our pages; if we use an anchor tag, it
will trigger a refresh of our application and we'll lose our application state!

Instead, we need to use the `Link` component from React Router to keep all of
our navigation between pages handled within Javascript.

```js
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="NavBar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default NavBar;
```

### Using Custom Hooks

`react-router` comes with several custom hooks that give us access to the internals
of React Router:

- `useParams`: access any dynamic parts of the url as `params`
  - If our url is `/projects/1`, and we're on the route `/projects/:id`, then
    `useParams` will return `{ id: 1 }`
- `useHistory`: access the browser's history to allow programmatic navigation
  - To navigate the user to `/page`, we'd use `history.push("/page")`
- `useLocation`: returns the location object, with info like the full URL for the current page and the current path.
- `useRouteMatch`: used to match the current URL to a given string, similar to
  the way `<Route>` would. Shows what route is currently being matched.

To work with these hooks, first import the one you'd like to use. Then, call it
in the body of your function component, just like you would with `useState` or
`useEffect`.

```js
import { useParams } from "react-router-dom";

function MyPage() {
  const params = useParams();

  return <h1>Page params: {params.id}</h1>;
}
```

## Resources

- [HTML5 History API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [React Router Website](https://reacttraining.com/react-router/)
- [React Router Github](https://github.com/ReactTraining/react-router)
