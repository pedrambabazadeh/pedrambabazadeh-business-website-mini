import React from 'react';
import { Grid, Box } from '@mui/material';
import { Search, Menu } from '@mui/icons-material';

export default function NavigationStructure(props) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Box className='left-nav' p={2}>
          <div>{props.left}</div>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p={2}>{props.center}</Box>
      </Grid>
    </Grid>
  );
}

