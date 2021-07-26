# React Forms

## Objectives

- [ ] Explain why we use controlled forms (vs uncontrolled forms)
- [ ] Implement a controlled form
- [ ] Use form data to update state

## Outline

- [ ] Create a form and make it controlled
  - Input change handlers
  - Form submit handler
- [ ] Handle submitting the form and update state in parent using inverse data flow
  - **Check for understanding**: [exercise](https://codesandbox.io/s/form-exercise-vpzpd?file=/src/App.js)

## Using Forms

### Process: Making a Controlled Form

1. For each input element in the form, create a new state variable
2. Connect the `value` attribute of each input field to the corresponding state variable
3. Create an `onChange` handler for each input field to _update_ the corresponding state variable
4. On the `<form>` element, create an `onSubmit` handler to run code when the form is submitted

### HTML Forms

In vanilla JS, our typical process for working with forms and getting access to
the form data in our application looked something like this:

- Get the form element and listen for a submit event
- Find the form inputs using their name attribute and grab the values
- Do something with the form data (send a `fetch` request; update the DOM)

```js
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // access form data from the DOM
  const nameInput = event.target.name;
  const passwordInput = event.target.password;

  const formData = {
    name: nameInput.value,
    password: passwordInput.value,
  };
  // do something with the form data
});
```

### React Controlled Forms

In React, rather than looking into the DOM to get the form's input field values
when the form is submitted, we use **state** to monitor the user's input **as
they type**, so that our component state is always _in sync_ with the DOM.

To keep track of each input's value, you need:

1. Some state to manage the input
2. An `onChange` listener on the input to monitor user input and update state
3. A `value` attribute on the input that corresponds to a key in state

And for the form itself, you need an `onSubmit` listener on the form to finally
submit data.

For example, if we have a form component that looks like this:

```js
function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  return (
    <form>
      <input type="text" name="username" />
      <textarea name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

We could make it a _controlled form_ by attaching onChange listeners to each input:

```js
function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  return (
    <form>
      <input type="text" name="username" onChange={handleUsernameChange} />
      <textarea name="comment" onChange={handleCommentChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

Doing this creates a 1-way connection wherein user input changes `state`. This
is called an _uncontrolled form_.

To make it a 2-way street wherein `state` can change the user's input, we add a
`value` attribute to our inputs.

```jsx
<form>
  <input
    type="text"
    name="username"
    onChange={handleUsernameChange}
    value={username}
  />
  <textarea name="comment" onChange={handleCommentChange} value={comment} />
</form>
```

### Inverse Data Flow

When the form actually submits, it's often helpful to pass the state from the form up to a parent component. Imagine we have an app like this:

```txt
    CommentContainer
       /       \
CommentForm CommentCard
```

When the user submits out the comment form, a new `CommentCard` should be rendered. The `CommentContainer` holds an array of comments in state, so it needs to be updated when a new comment is added. To achieve this, we need to pass down a _callback function_ from the `CommentContainer` to the `CommentForm` as a prop:

```js
function CommentContainer() {
  const [comments, setComments] = useState([])

  const commentCards = comments.map((comment, index) => (
    <CommentCard key={index} comment={comment} />
  ))

  // callback for adding a comment to state
  function addComment(newComment) {
    setComments([...comments, comment]);
  };

  render() {
    return (
      <section>
        {commentCards}
        <hr />
        <CommentForm onAddComment={addComment} />
      </section>
    );
  }
}
```

When the user submits the comment, we can use the `handleCommentSubmit` callback in the `onSubmit` event in the `CommentForm`:

```js
function CommentForm({ onAddComment }) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newComment = {
      username,
      comment,
    };
    onAddComment(newComment);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleUsernameChange} />
      <textarea name="comment" onChange={handleCommentChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Advanced State Updates: Arrays

These are some common strategies for updating arrays in state _without_ mutating the original array.

- adding an item: use **spread operator** - `setItems([...items, newItem])`
- removing an item: use **filter** - `setItems(items.filter(i => i.id !== id))`
- updating an item: use **map** - `setItems(items.map(i => i.id === newItem.id ? newItem : item))`

#### Adding to an array

- Use the spread operator!

```js
function addComment(newComment) {
  // spread to create a new array and add new comment at the end
  const updatedComments = [...comments, newComment];
  setComments(updatedComments);
}
```

#### Removing from an array

- Use filter!

```js
function removeComment(commentId) {
  // filter to return a new array with the comment we don't want removed
  const updatedComments = comments.filter(
    (comment) => comment.id !== commentId
  );
  setComments(updatedComments);
}
```

#### Updating an item in an array

- Use map!

```js
function updateComment(updatedComment) {
  // filter to return a new array with the comment we don't want removed
  const updatedComments = comments.map((comment) => {
    if (comment.id === updatedComment.id) {
      // if the comment in state is the one we want to update, replace it with the new updated object
      return updatedComment;
    } else {
      // otherwise return the original object
      return comment;
    }
  });
  setComments(updatedComments);
}
```

If you only want to update one attribute instead of replacing the whole object:

```js
// updating one object in an array
function updateCustomer(id, name) {
  // use map to return a new array so we aren't mutating state
  const updatedCustomers = customers.map((customer) => {
    // in the array, look for the object we want to update
    if (customer.id === id) {
      // if we find the object
      // make a copy of it and update whatever attribute have changed
      return {
        ...customer,
        name: name,
      };
    } else {
      // for all other objects in the array
      return customer; // return the original object
    }
  });

  // set state with our updated array
  setCustomers(updatedCustomers);
}
```
