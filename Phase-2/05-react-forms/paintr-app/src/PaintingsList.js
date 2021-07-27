// Component Imports
import Painting from './Painting';

// Hooks Imports
import { useState } from 'react';

// Material-UI Imports
import { TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';

function PaintingsList(props) {
  
  // Use original list of paintings for comparison
  const originalList = props.paintingsData;

  // Create filteredPaintings state to keep track of filtered paintings
  const [filteredPaintings, filteredPaintingsSetter] = useState(props.paintings);

  // Create a function that's going to check each of our Painting objects against
  // a Search query
  function handleSearch(e) {
    let filteredPaintingsList = [];
    
    // Potential Re-Factor Using Ternary Operator Structure (Re: Arthur)
    // { e.target.value !== "" ? someFilterFunction : returnAllPaintings }

    // filteredPaintingsList = originalList.filter(painting => painting.title.toLowerCase() === criterion.toLowerCase())

    // function handleSearch(e)
    // {
    //   e.target.value !== "" ? filterFunction(e.target.value) :  filteredPaintingsSetter(props.paintings)
    // }

    // function filterFunction(criterion)
    // {
    //   let filteredPaintingsList = originalList.filter(painting => painting.title.toLowerCase().includes(criterion.toLowerCase()))
    //   setFilteredPaintings(filteredPaintingsList)       
    // }

    // as we type, filter out the paintings that match
    // our Search query and store in "filteredPaintingsList"
    if (e.target.value !== "") {
      
      filteredPaintingsList = originalList.filter(painting => {
        const title = painting.title.toLowerCase();
        const query = e.target.value.toLowerCase();
      
        return title.includes(query);
      });

      filteredPaintingsSetter(filteredPaintingsList);
    
      // if the TextField is currently empty, then return all paintings
      // using "props.paintings"  
    } else {
      filteredPaintingsSetter(props.paintings);
    }
  }

  return(
    <div>
    {/* Shorthand JSX Parent Container Syntax */}
    {/* <> */}

      <Container align="center">
        <h1>Paintings</h1>
        <hr />
        <TextField 
          id="filled-basic" 
          label="Filled" 
          variant="filled" 
          onChange={handleSearch}
        />

        {/* Implement Material-UI */}
        <Box m={5}>
          <Grid
            container
            spacing={10}
            direction="row"
          >
            {
              filteredPaintings.map(painting => (
                <Grid item xs={3}>
                  <Painting
                    key={painting.id}
                    painting={painting}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Container>
    
    {/* </> */}
    </div>
  );
}

export default PaintingsList;
