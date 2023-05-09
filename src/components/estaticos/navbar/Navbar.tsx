import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {

    const history = useNavigate();

    const dispatch = useDispatch();

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        history("/login");
    }

    let navbarComponent;

    if (token !== '') {
        navbarComponent = <AppBar position="static">
            <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" style={{ backgroundColor: "#000000" }}>
                        <Toolbar>
                            <Box>
                                <Typography display='flex' variant="h6" component="div" align="center" sx={{ flexGrow: 1 }} style={{ fontSize: 20, fontStyle: 'italic' }}>
                                    CINÉFILOS ANÔNIMOS
                                </Typography>
                            </Box>

                            <Link to='/home' className='text-decorator-none'>
                                <Box>
                                    <Typography>
                                        Home
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to='/postagens' className='text-decorator-none'>
                                <Box>
                                    <Typography>
                                        Postagem
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to='/temas' className='text-decorator-none'>
                                <Box>
                                    <Typography>
                                        Temas
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to='/formularioTema' className='text-decorator-none'>
                                <Box>
                                    <Typography>
                                        Cadastrar tema
                                    </Typography>
                                </Box>
                            </Link>

                            <Box mx={1} className='style' onClick={goLogout}>
                                <Button>
                                    Logout
                                </Button>
                            </Box>

                        </Toolbar>
                    </AppBar>
                </Box>
        </AppBar>
        }

        
        return (
            <>
                {navbarComponent}
            </>
        );
    }

    export default Navbar;
