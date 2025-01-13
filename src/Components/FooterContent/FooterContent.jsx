import React from 'react'
import './footer-content.css'
import {Grid2 as Grid, Box} from '@mui/material'

export default function FooterContent()
{

    let photo = "./"
    return(
        <div className='footer_content__div'>
            <Grid container spacing={2}>
                <Grid item size={{xs:12, md: 4}}>
                    <Box>
                        <img src="/LogoDark.png" style={{width: '300px'}}/>
                    </Box>
                </Grid>
                <Grid item size={{xs:6, md: 4}}>
                    <Box>
                       <ul>
                        <li>location</li>
                        <li>location</li>
                        <li>location</li>
                       </ul>
                    </Box>
                </Grid>
                <Grid item size={{xs:6, md: 4}}>
                    <Box>
                    <ul className='footer_social-media__ul'>
                        <li>location</li>
                        <li>location</li>
                        <li>location</li>
                       </ul>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}