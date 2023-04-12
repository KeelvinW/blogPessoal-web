import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar (){
    return (
        <>
        <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" style={{ backgroundColor: "#852B0D"}}>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontSize: 20, fontStyle:'italic'}}>
                Film Lovers
            </Typography>
            <Button color="inherit" style={{fontSize: 12, fontStyle:'italic'}}>Login</Button>
            </Toolbar>
        </AppBar>
        </Box>
        </>
    )
}

export default Navbar;