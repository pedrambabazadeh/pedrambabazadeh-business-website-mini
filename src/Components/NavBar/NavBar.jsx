import React, { useEffect } from 'react'
import {default as data} from './NavBarData'
import NavBarStructure from './NavBarStructure'
import MobileMenu from './MobileNavBar'
import { Grid2 as Grid, Box, Grid2 } from '@mui/material'
import './nav-bar.css'
import { Menu } from '@mui/icons-material'
export default function NavBar() {
  return (
    <>
    <Grid container display={{xs : 'none', md:'block'}} size={{xs : 12}}>
      <NavBarStructure items={data}/>
    </Grid>
      <Menu/>
    <Grid container /*display={{ md:'none'}}*/ size={{xs : 8}}>
      <MobileMenu data={data}/>
    </Grid>

    </>
  )
}
