# Dog Walker Application

## Key Features

- View List of Dogs
- View a List of Walks
- Create a Dog
- Create a Walk
- Add Dogs to a walk
- Mark off which dogs went number two

## components

### App

- Establishes routes pointing to DogsContainer and WalksContainer

### Dogs

#### DogsContainer

- Fetches Dogs from API
- Establishes client side routes related to Dogs
  - `/` => DogsList
  - `/new` => NewDogForm
  - `/:id` => DogDetail

#### NewDogForm

- Controlled Form to create a new dog
- sends POST request to API, stores the Dog in response within local state
- redirects to the `/dogs` route.

#### DogsList

- Shows a list of dogs with images within a grid

#### DogListItem

- Shows an individual item within the grid

#### DogDetail

- Shows details about a particular Dog including its dog walks

### Walks

#### WalksContainer

- Fetches Walks from API
- Establishes client side routes related to Dogs
  - `/walks` => WalksList
  - `/walks/new` => NewWalkForm
  - `/walks/:id` => WalkDetail

#### NewWalkForm

- Controlled Form to create a new walk
- sends POST request to API, stores the walk in response within local state
- redirects to the `/walks/:id` route so that dogs can be added

#### WalksList

- Displays a list of all walks, their times, and the names of the dogs who were on them

#### WalkListItem

- Displays an individual item within the walks list

#### WalkDetail

- Displays
  - the time of the walk 
  - a list of dogs (also links) that are on the walk including whether they went number two
  - a checkbox to indicate that are particular dog did their business

#### NewDogWalk

- A component that displays a collection of dogs with names and photos and allows selection of dogs to include on a walk





