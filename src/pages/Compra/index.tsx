import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Me2Api } from "../../apis/Me2";
import { ViaCepApi } from "../../apis/ViaCep";
import Input from "../../components/Form/Input";
import { useAuth } from "../../hooks/useAth";
import { Div, Form } from "./styled";

type TData ={
    nome: string,
    valor:number
}
export default function Compra() {
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState("Logradouro:")
    const [bairro, setBairro] = useState("Bairro:")
    const [localidade, setLocalidade] = useState("Cidade:")
    const [estado, setEstado] = useState("Estado:")
    const [numero, setNumero] = useState("")
    const [moto,setmoto] = useState<TData>({} as TData)
    const {id} = useParams()
    const {userData} = useAuth()
    const navigator = useNavigate();
    async function getCep() {
        if(cep.length < 8) return
        const {data} = await ViaCepApi(cep).get("/")
        setLogradouro(data.logradouro)
        setBairro(data.bairro)
        setLocalidade(data.localidade)
        setEstado(data.uf)
    }

    async function motocycleChooser() {
        const {data} = await Me2Api(`/motorcycles/${id}`)
        setmoto({nome: data.nome, valor: data.valor})
    }

    function handleBuyMotor(e: any) {
        e.preventDefault();
        Me2Api.post('/sales', { 
            userId: userData.id,
            motorcycleId: id,
            address: {
                logradouro,
                localidade,
                bairro,
                estado,
                numero
                
            }
        })

        navigator("/home")
        
    }
    
    useEffect(() => {
        motocycleChooser()
    },[])


    useEffect(() => {
        getCep()
    },[cep])

    return (
        <Form onSubmit={handleBuyMotor}>
            <Div>
                <h2><span>Moto: </span>{moto.nome}</h2>
                <h2><span>Valor: </span>{moto.valor}</h2>
            </Div>
            <Input value="Cep" set={setCep}/>
            <Input value={logradouro} set={setLogradouro}/>
            <Input value={bairro} set={setBairro}/>
            <Input value={localidade} set={setLocalidade}/>
            <Input value={estado} set={setEstado}/>
            <Input value="Número:" set={setNumero}/>
            <input type={'submit'} value="comprar"/>
        </Form>
    )
}