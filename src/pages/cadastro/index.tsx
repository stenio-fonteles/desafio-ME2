import Button from "../../components/Button/index";
import Input from "../../components/Form/Input";
import { useEffect,useState } from "react";
import axios from "axios";
import { Div,Container } from './styled'
import { useNavigate } from "react-router-dom";

type TDataUser = {
    name: string,
    email: string
    password: string
}
export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    let navigate = useNavigate();

    const [dataUser, setDataUser] = useState<TDataUser[]>([])

    
    async function handleSubmit ()
    {
        if(name == '' ) return;
        await axios.post('/api/users', {name, email, password} )
    }

    useEffect(() => console.log(dataUser), [dataUser])
    function handleNavegate () {
        navigate("/login")
    }
    return(
        <Div>
            <Container>
                <h1>Cadastro</h1>
                <Input value={'Nome:'} set={setName}/>
                <Input value={'Email:'} set={setEmail}/>
                <Input value={'Senha:'} set={setPassword}/>
                <Button value={'login'} click={handleNavegate} />
                <Button value={'Cadastrar'} click={handleSubmit} />
            </Container>
        </Div>
    )
}