import React, { useEffect, useState } from 'react'
import {default as data} from './NavBarData'
import NavBarStructure from './NavBarStructure'
import MobileMenu from './MobileNavBar'
import { Grid2 as Grid, Box, Grid2 } from '@mui/material'
import './nav-bar.css'
import { Close, Menu } from '@mui/icons-material'
export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <Grid container display={{xs : 'none', md:'block'}} padding = {{xs: '16px'}} size={{xs : 12}}>
      <NavBarStructure items={data}/>
    </Grid>
    <Box className='menu-icons' display={{md: 'none'}} onClick={() => setMenuOpen(!isMenuOpen)}>
      {!isMenuOpen ? <Menu /> : <Close/>}
    </Box>
    <Grid container display={{ md:'none'}} size={{xs : 8}} justifyContent={{xs:'end'}}>
      <MobileMenu data={data} show={isMenuOpen}/>
    </Grid>

    </>
  )
}
