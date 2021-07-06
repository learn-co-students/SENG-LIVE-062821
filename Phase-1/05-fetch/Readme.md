Gotta `fetch`'em All!
===================

![pokeballs](https://media.giphy.com/media/W04QVzelTHsNW/giphy.gif)

## Objectives
- [ ] Understand at a high level how the world wide web works
- [ ] Explain request response cycle
- [ ] Understand JSON
- [ ] Understand why we request data asynchronously
- [ ] Create `fetch` requests 
- [ ] Manipulate the DOM in conjunction with `fetch` calls


### Deliverables (User Stories)

Expand the functionality of the JS Pokemon Search Assignment!

- [ ] As a user, I should see all the Pokemon
- [ ] As a user, I should click a pokemon to see it's details

These changes should _persist_ in our database.

### Mocking your own API

- Our "server" is being faked with a package called [json-server][json-server]. This package uses a local file, `db.json` to spin up a RESTful JSON API in about 30 seconds. To run your server:
  - `$ npm install -g json-server` this will install the node package (similar to a gem) globally `-g` on your machine
  - `$ json-server --watch db.json` this spins up the server, it will default to `localhost:3000`

### Sample Markdown

- We've also included a sample of the HTML that you can use to style your pokemon cards:

```html
<div class="pokemon-card">
  <div class="pokemon-frame">
    <h1 class="center-text">charizard</h1>
    <div class="pokemon-image">
      <img data-id="7" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
    </div>
  </div>
</div>
```

---

## Lecture Notes

### Single Page Applications (SPA)

**Why** are we doing all of this with `fetch`? 🤷

* We want to make our User Experience (UX) feel smooth and responsive.
* No more refreshing!
* No more request <=> response for every action we want to perform.
* Instead, we will load (new) content onto the page and make changes with JavaScript.
  * Changes will be made with `fetch` and it will be asynchronous.
* For example, like Twitter
  * => No refreshing; things just happen!
  * Sometimes we have to wait, but we can have indicators to show us that stuff is happening rather than waiting for the page to refresh.


### Fetching ⚾️ <== 🐕

**About**

* `fetch` will always **return** a [_Promise_][mdn-promise] and it is promising to do something **if** it returns. We can think of this as the **promise** of an eventual value
  * There is **NO** guarantee of when it will come back!
  * There is **NO** guarantee that it will succeed!
* We **want** `fetch` to be **asynchronous _BECAUSE_**:
  * **If** `fetch` calls were **synchronous**, we would be stuck waiting for the call to finish before the code could proceed.
  * So **rather than _blocking_** any other JavaScript from running, we want `fetch` calls to be asynchronous. We want to write code around the eventual success or failure of some _asynchronous_ ⏳ operation such as an HTTP request.




## External Resources
- [json-server][json-server]
- [MDN Using `fetch`][using-fetch-mdn]
- [MDN Promises][mdn-promise]
- [MDN MIME Types][mdn-mime-types]

<!-- markdown vars -->
[json-server]: https://github.com/typicode/json-server
[using-fetch-mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
[mdn-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[mdn-mime-types]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
