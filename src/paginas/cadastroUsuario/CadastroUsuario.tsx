import React, { useState, useEffect, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastroUsuario } from "../../service/Service";
import './CadastroUsuario.css'
import { toast } from 'react-toastify';

function CadastroUsuario() {

    const history = useNavigate();

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        foto: "",
        senha: "",
    });

    const [usuarioResult, setUsuarioResult] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        foto: "",
        senha: "",
    });

    const [confirmarSenha, setConfirmarSenha] = useState<String>("");

    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value);
    }

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value,
        });
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
            try {
                await cadastroUsuario(
                    "/usuarios/cadastrar",
                    usuario,
                    setUsuarioResult
                );
                toast.success("Usuário cadastrado com sucesso", {
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
                toast.error("Dados inconsistentes. Verifique as informações de cadastro!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } else {
            toast.error("As senhas não coincidem!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setConfirmarSenha("");
            setUsuario({
                ...usuario,
                senha: "",
            });
        }
    }


    useEffect(() => {
        if (usuarioResult.id !== 0) {
            history("/login");
            // console.log(userResult)
        }
    }, [usuarioResult]);

    function back() {
        history("/login");
    }


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' style={{ background: '#7D0000' }}>
            <Grid item xs={6} className='imagemLogin2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='#370000' component='h3' align='center' style={{ fontWeight: 'bold' }}>Faça seu Cadastro!</Typography>
                        <TextField value={usuario.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='nome' variant='outlined' label='Nome' name='nome' margin='normal' className='barraLog' fullWidth />
                        <TextField value={usuario.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='usuario' variant='outlined' label='Usuário' name='usuario' margin='normal' className='barraLog' fullWidth />
                        <TextField value={usuario.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='senha' variant='outlined' label='Senha' name='senha' margin='normal' className='barraLog' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} id='confirmarSenha' variant='outlined' label='confirmarSenha' name='confirmarUsuario' margin='normal' className='barraLog' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button variant='contained' color='secondary' className='btnCancelar'>
                                Cancelar
                            </Button>

                            <Button type='submit' color='primary' variant='contained'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>

    );
}

export default CadastroUsuario