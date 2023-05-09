import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Home() {

    const history = useNavigate();

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado!", {
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
    }, [token]);

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#7D0000" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" style={{ color: "white", fontWeight: "bold" }}>Cinéfilos Anônimos</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo amante de cinema. Deixe sua sujestão de filme!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/postagens" className='text-decorator-none estilo-ver-postagem'>
                            <Button variant="outlined">Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <div className="imagem">

                    </div>
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;