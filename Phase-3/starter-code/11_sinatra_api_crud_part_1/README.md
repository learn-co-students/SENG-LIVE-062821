# Sinatra API CRUD

In this lecture, we'll be covering the following topics:
- Sinatra <=> React CRUD
- Optimistic vs pessimistic rendering
- Including model methods in serialized json
- Important Debugging and Developer Tools to use when working with a full stack app.


## Agenda

- Create and Read
  - Add Ability to Create DogWalks
  - Refresh the page on /dogs/:id and demonstrate need for fetch here to get dog and its walks
  - Break
- Update and Delete
  - add the ability to update pooped for a DogWalk
  - describe and demonstrate difference between optimistic and pessimistic rendering
  - add ability to delete a DogWalk using window.confirm to ask for confirmation first.
  - longer break
- Student Exercise in Breakouts 
  - Add ability to edit dogs and see the edited result in the dogs index view
  - Add ability to delete dogs (from the main /dogs route). Ask for confirmation first, then remove the Dog from the database and also from the index view.
  Advanced
  - Navigate to the edit view via one of the pencil icon links. Refresh the page - where did the form data go? Make sure the form data for the dog you're editing populates even on a page refresh.
  - Try adding a couple of dog walks for a dog and then deleting the dog, what happens? Remember to check the terminal running `rake server` and/or to use `binding.pry` to get feedback about what's happening. Fix the issue. 
  
## Feature Checklist

### Event Listeners/Handlers

### Fetch Calls

### API endpoints

### State Changes

### Rendering Logic/Updates