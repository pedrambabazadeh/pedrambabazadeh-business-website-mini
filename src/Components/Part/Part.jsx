import React from 'react'
import './part.css'
import { Button, Grid2 as Grid, Box } from '@mui/material'

export default function Part({id="", color, data="", title, children}) {
  return (
    <section id={id} className='main-section'>
      <h3 className='section_title'>{title}</h3>
      <div className='separator'
          style={{backgroundColor: color,
          boxShadow: `3px 0px 5px ${color}, -3px -0px 5px ${color}`}}>
          &nbsp;
      </div>
      <Grid container>
        <Grid item size={{'xs': 11, 'md': 7}}>
          <Box>
            <p className='section_description'>{data}</p>
          </Box>
        </Grid>
        {children}
      </Grid>
    </section>
  )
}
