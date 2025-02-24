import React from 'react';
import { Grid2 as Grid, Box } from '@mui/material';

export default function NavigationStructure(props) {
  return (
    <nav>
      <Grid container spacing={4}>
        <Grid item size={{xs : 6}} justifyItems={{xs:'start'}}>
            <div className='top-logo'>{props.left}</div>
        </Grid>
        <Grid item size={{xs : 6 , lg: 4}} justifyItems={{xs:'end'}}>
          {props.center}
        </Grid>
      </Grid>
    </nav>
  );
}

