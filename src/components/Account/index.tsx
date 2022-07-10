import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';

import { useState } from 'react';
import { useAuth } from '../../hooks/useAth';
import Input from '../Form/Input';
import {Div,Container,Button,Content} from './styled'

type TData = {
    id: string
    nome: string
}
export default function UserAccount({nome, id}:TData) {
    const[active,setActive] = useState(false)
    const {isAuthenticated, logout} = useAuth();

    const [newUser, setNewUser] = useState('') 
    function handleShowAccount() {
        setActive(oldState => !oldState)
    }

    async function handleDeleteAccount() {
        await axios.delete(`/api/users/${id}`)

        console.log("deleted User")
    }

    function handleDeslogarAccount() {
        console.log(isAuthenticated)
        logout()
    }

    return(
        <Container>
                <AccountCircleIcon onClick={handleShowAccount}/>
                <Div active={active}>
                    <Button onClick={handleShowAccount}> X </Button>
                    <Content>
                        <h1>{nome}</h1>
                        <button onClick={handleDeleteAccount}> Editar</button>
                        <button onClick={handleDeslogarAccount}> Deslogar</button>
                        <Input value='name'  set={setNewUser}/>
                    </Content>
                </Div>

        </Container>
    )
 }