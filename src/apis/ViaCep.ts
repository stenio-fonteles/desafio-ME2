import axios from "axios"

const ViaCepApi = (cep: string) => axios.create({
    baseURL: `https://viacep.com.br/ws/${cep}/json/`
})

export { ViaCepApi }