import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Grid, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UsuarioLogin from '../../models/UsuarioLogin';
import { login } from '../../service/Service';
import useLocalStorage from 'react-use-localstorage';
import { api } from '../../service/Service';
import onSubmit from 'react';
import "./Login.css"
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {

    const history = useNavigate()

    const dispatch = useDispatch();

    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        });
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            // await login("/usuarios/logar", userLogin, setRespUserLogin);
            await login("/usuarios/logar", userLogin, setToken);
            toast.success("Usuario logado com sucesso", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (error) {
            console.log(error);
            toast.error("Usuário ou senha inválidos!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token));
            history("/home");
        }
    }, [token]);

    // useEffect(() => {
    //     if (respUserLogin.token !== "") {
    //         dispatch(addToken(respUserLogin.token));
    //         dispatch(addId(respUserLogin.id.toString()));
    //         history("/home");
    //     }
    // }, [respUserLogin.token]);

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' style={{ background: '#7D0000' }}>
                <Grid item xs={6} justifyContent='center'>
                    <Box paddingX={20} justifyContent='center'>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='#370000' component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                            <TextField
                                id='usuario'
                                variant='outlined'
                                label='Usuário'
                                name='usuario'
                                value={userLogin.usuario}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                                margin='normal'
                                // className='barraLog'
                                fullWidth />
                            <TextField
                                id='senha'
                                variant='outlined'
                                label='Senha'
                                name='senha'
                                value={userLogin.senha}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                                margin='normal'
                                // className='barraLog'
                                type='password'
                                fullWidth />
                            <Box marginTop={2} textAlign='center'>

                                <Button type='submit' className='botao' variant='contained' fullWidth>
                                    Logar
                                </Button>

                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>
                                    Não tem uma conta?
                                </Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                                <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>
                                    Cadastre-se
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} className='imagemLogin'>
                </Grid>
            </Grid>
        </>
    )
}

export default Login