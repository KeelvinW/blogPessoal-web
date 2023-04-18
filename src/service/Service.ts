import axios from "axios";
// import CadastroUsuario from '../paginas/cadastroUsuario/CadastroUsuario';

export const api = axios.create({
    baseURL: 'https://blogpessoal-d1af.onrender.com/'
})


    export const cadastroUsuario = async(url: string, dados: Object, setDados: Function) => {
        const resposta = await api.post(url, dados)
        setDados(resposta.data)
    }

    export const login = async(url: string, dados: Object, setDados: Function) => {
        const resposta = await api.post(url, dados)
        setDados(resposta.data.token)
    }
