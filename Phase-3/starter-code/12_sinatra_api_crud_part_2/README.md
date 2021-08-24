# Sinatra API CRUD Part 2

In this lecture, we'll be getting more practice with the following topics:
- Sinatra <=> React CRUD
- Optimistic vs pessimistic rendering
- Including model methods in serialized json
- Important Debugging and Developer Tools to use when working with a full stack app.


## Agenda

- Create and Read
  - Add Ability to Create Walks and Add Dogs to them
  - Get the `/walks` route working to list the walks in the API
  - Break
- Update and Delete from the `/walks/:id` route 
  - add the ability to update pooped for a DogWalk from the `walks/:id` route
  - add ability to delete the walk using window.confirm to ask for confirmation first.
  - longer break
- Student Exercise in Breakouts 
  - The Focus of both deliverables is delete functionality.
  - On the `/walks` client side route, configure the `trash` icon so it responds to a click by asking for confirmation to delete, sending the request to your api to delete the walk and removing it from the list of walks client side. 
  - On the `/dogs/:id` client side route, the `trash` icon currently sends a delete request but there's an error that happens right afterwards. Do the following to test it out:
    - Create a new dog
    - Navigate to the newly created dog and click on the walks button
    - click on the trash icon
    - this should trigger the error, use your debugging skills to figure out what the problem is and fix it

  
## Feature Checklist

### Event Listeners/Handlers

### Fetch Calls

### API endpoints

### Model Methods

### State Changes

### Rendering Logic/Updates