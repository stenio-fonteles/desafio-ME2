import Button from "../../components/Button/index";
import Input from "../../components/Form/Input";
import { useEffect,useState } from "react";
import axios from "axios";

type TDataUser = {
    email: string
    password: string
}
export default function Cadastro() {
    let [users, setUsers] = useState([])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    const [dataUser, setDataUser] = useState<TDataUser[]>([])

    
    async function handleSubmit ()
    {
        setDataUser(oldState => [...oldState, {name, email, password}]);
        await axios.post('/api/users', dataUser )
    }

    useEffect(() => console.log(dataUser), [dataUser])

    return(
        <>
            <Input value={'Nome:'} set={setName}/>
            <Input value={'Email:'} set={setEmail}/>
            <Input value={'Senha:'} set={setPassword}/>
            <Button value={'login'}  to={'/login'}/>
            <Button value={'Cadastrar'} click={handleSubmit} />
        </>
    )
}