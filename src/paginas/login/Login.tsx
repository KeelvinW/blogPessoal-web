import React from 'react'
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import "./Login.css"
import { Link, Button } from '@mui/material';
import { TextField, Typography } from '@mui/material';

function Login() {
    return (
        <>
            <Grid container alignItems={'center'} style={{background: '#7D0000'}}>
                <Grid item xs={6} justifyContent='center'>
                    <Box display='flex ' justifyContent='center'>
                        <form action="">
                            <Typography variant='h3' gutterBottom color='#370000' component='h3' align='center' style={{fontWeight: 'bold'}}>Entrar</Typography>
                            <TextField id='usuario' variant='outlined' label='Usuário' name='usuario' margin='normal' className='barraLog' fullWidth/>
                            <TextField id='senha' variant='outlined' label='Senha' name='senha' margin='normal' className='barraLog' fullWidth/>
                            <Link className='sublinhado'>
                                <Button type='submit' size='large' variant='contained' className='botao' fullWidth >Logar</Button>
                            </Link>
                        </form>
                    </Box>
                </Grid>    
                <Grid xs={6} className='imagemLogin'>
                </Grid>
            </Grid>
        </>
    )
}

export default Login