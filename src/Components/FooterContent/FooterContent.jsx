import React from 'react'
import './footer-content.css'
import {Grid2 as Grid, Box} from '@mui/material'
import { LocationCity, Phone, Mail, MyLocation, Instagram, LinkedIn, Facebook, FacebookRounded } from '@mui/icons-material'

export default function FooterContent()
{

    let photo = "./"
    return(
        <div className='footer_content__div'>
            <Grid container spacing={2}>
                <Grid item size={{xs:12, md: 4}}>
                    <Box p={2}>
                        <img className="footer_logo" src="/LogoDark.png" style={{width: '300px'}}/>
                    </Box>
                </Grid>
                <Grid item size={{xs:6, md: 4}}>
                    <Box>
                       <ul>
                        <li>
                            <LocationCity/>
                            Budapest, HU
                        </li>
                        <li>
                            <Mail/>
                            info@webinsighter.com</li>
                       </ul>
                    </Box>
                </Grid>
                <Grid item size={{xs:6, md: 4}}>
                    <Box>
                    <ul className='footer_social-media__ul'>
                        <li>
                            <a href='http://instagram.com'>
                                <Instagram/>
                            </a>
                        </li>
                        <li>
                            <a href='https://linkedin.com'>
                                <LinkedIn/>
                            </a>
                        </li>
                        <li>
                            <a href='http=facebook.com'>
                                <FacebookRounded/>
                            </a>
                        </li>
                       </ul>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}