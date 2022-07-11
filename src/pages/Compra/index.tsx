import axios from "axios";
import { useEffect, useState } from "react";
import { ViaCepApi } from "../../apis/ViaCep";
import Input from "../../components/Form/Input";
import { Form } from "./styled";

type TData ={
    getCep: any
}
export default function Compra() {
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState("Logradouro:")
    const [bairro, setBairro] = useState("Bairro:")
    const [localidade, setLocalidade] = useState("Cidade:")
    const [estado, setEstado] = useState("Estado:")

    const [localization, setLocalization] = useState()

    async function getCep() {
        const {data} = await ViaCepApi(cep).get("/")
        // setLocalization(getCep)
        // console.log(getCep)
        setLogradouro(data.logradouro)
        setBairro(data.bairro)
        setLocalidade(data.localidade)
        setEstado(data.uf)
    }
    
    useEffect(() => {
        getCep()
    },[cep])

    return (
        <Form>
            <Input value="Cep" set={setCep}/>
            <Input value={logradouro} set={setLogradouro}/>
            <Input value={bairro} set={setBairro}/>
            <Input value={localidade} set={setLocalidade}/>
            <Input value="Número:" set={setLogradouro}/>
        </Form>
    )
}