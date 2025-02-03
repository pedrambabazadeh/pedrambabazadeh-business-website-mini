import React, { useEffect } from 'react'
import {default as data} from './NavBarData'
import NavBarStructure from './NavBarStructure'
import { Grid2 as Grid, Box, Grid2 } from '@mui/material'
import './nav-bar.css'
export default function NavBar() {
  return (
    <Grid container display={{xs : 'none', md:'block'}} size={{xs : 12}}>
    <NavBarStructure items={data}/>
    </Grid>
  )
}
