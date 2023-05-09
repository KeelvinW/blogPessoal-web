import axios from "axios";
// import CadastroUsuario from '../paginas/cadastroUsuario/CadastroUsuario';

export const api = axios.create({
    baseURL: 'https://blogpessoal-d1af.onrender.com/'
})


    export const cadastroUsuario = async(url: string, dados: object, setDados: any) => {
        const resposta = await api.post(url, dados)
        setDados(resposta.data)
    }

    export const login = async(url: string, dados: object, setDados: any) => {
        const resposta = await api.post(url, dados)
        setDados(resposta.data.token)
    }

    export const getAll = async(url: any, setDados: any, header: any) => {
        const resposta = await api.get(url, header)
        setDados(resposta.data)
    }

    export const getById = async(url: any, setDados: any, header: any) => {
        const resposta = await api.get(url, header)
        setDados(resposta.data)
    }

    export const post = async(url: any, dados: object, setDados: any, header: any) => {
        const resposta = await api.post(url, dados, header)
        setDados(resposta.data)
    }

    export const put = async(url: any, dados: object, setDados: any, header: any) => {
        const resposta = await api.put(url, dados, header)
        setDados(resposta.data)
    }

    export const deleteId = async(url: any, header: any) => {
        await api.delete(url, header)
        
    }
