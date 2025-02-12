import React from 'react';
import { Grid2 as Grid, Box } from '@mui/material';
import { Search, Menu } from '@mui/icons-material';

export default function NavigationStructure(props) {
  return (
    <nav>
      <Grid container spacing={4}>
        <Grid item size={{xs : 6}}>
          <Box className='left-nav' p={2}>
            <div>{props.left}</div>
          </Box>
        </Grid>
        <Grid item size={{xs : 6}} justifyItems={{xs:'end', md:'start'}}>
          {props.center}
        </Grid>
      </Grid>
    </nav>
  );
}

