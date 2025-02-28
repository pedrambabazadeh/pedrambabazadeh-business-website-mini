import React from 'react'
import './header.css'
import { Navigation } from '..';
import { Button, Grid2 as Grid, Box } from '@mui/material'
import mailtoFunction from './mailtoFunction';

export default function Header() {
    let coverPhoto= "/Home%20Wallpaper1.png";
    let text = {header: 'Build. Grow. Scale. Your Digital Success Starts Here.',
                body: 'Websites that convert. SEO that ranks. Marketing that drives results.'
    }
  return (
    <header style={{backgroundImage: `url(${coverPhoto})`}}>
    <Navigation/>
        <Grid container spacing={2} justifyContent='center' alignItems='center' height='100%'>
          <Grid item size={{xs:0, lg:1}}></Grid>
          <Grid item size={{xs:10}} alignContent='center' alignItems='center' alignSelf='end'>
            <Box p={2}>
            <div className='header_text'>
            <h2>
              {text.header}
            </h2>
            <p>
              {text.body}
            </p>
            <Button
            onClick={mailtoFunction}
              style={{ borderRadius: '24px', padding: '12px 20px'}}
              className='header_button__back'
              variant='outlined'
              color='secondary'
            >
              Let’s grow your business today!
              </Button>
            </div>
            </Box>
          </Grid>
          <Grid item size={{xs:12}}>
          </Grid>
        </Grid>
    </header>
  )
}
