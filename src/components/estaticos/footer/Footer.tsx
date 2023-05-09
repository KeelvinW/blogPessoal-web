import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    let footerComponent;

    if(token !== '') {
        footerComponent =
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box style={{ backgroundColor: "#000000", height: "150px" }}>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Segue nóis e da uma força! </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/generationbrasil" target="_blank">
                        <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                    </a>

                </Box>
                <Box>
                    <a target="_blank" href="">
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }


    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;