import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { getById, post, put } from '../../../service/Service';
import { useNavigate, useParams } from 'react-router-dom';
import './CadastroTema.css';
import useLocalStorage from 'react-use-localstorage';
import onSubmit from 'react';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroTema() {

    const history = useNavigate();

    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: "",
    });

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

    useEffect(() => {
        if (id !== undefined) {
            findById(id);
        }
    }, [id]);

    async function findById(id: string) {
        await getById(`/temas/${id}`, setTema, {
            headers: {
                Authorization: token,
            },
        });
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("tema " + JSON.stringify(tema));

        if (id !== undefined) {
            console.log(tema);
            await put("/temas", tema, setTema, {
                headers: {
                    Authorization: token,
                },
            });
            toast.success("Tema atualizado com sucesso", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            post("/temas", tema, setTema, {
                headers: {
                    Authorization: token,
                },
            });
            toast.success("Tema cadastrado com sucesso", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            history("/temas");
        }
        back();
    }

    function back() {
        history("/temas");
    }



    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;