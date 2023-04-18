import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" style={{ backgroundColor: "#000000" }}>
                    <Toolbar>
                        <Box>
                            <Typography display='flex' variant="h6" component="div" align="center" sx={{ flexGrow: 1 }} style={{ fontSize: 20, fontStyle: 'italic' }}>
                                CINÉFILOS ANÔNIMOS
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box>
                                <Button className='style'>
                                    Logout 
                                </Button>
                            </Box>
                        </Link>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;