import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';

import { useState } from 'react';
import {Div,Container,Button,Content} from './styled'

type TData = {
    id: string
    nome: string
}
export default function UserAccount({nome, id}:TData) {
    const[active,setActive] = useState(false)

    function handleShowAccount() {
        setActive(oldState => !oldState)
    }

    async function handleDeleteAccount() {
        await axios.delete(`/api/users/${id}`)

        console.log("deleted User")
    }

    console.log(nome)
    return(
        <Container>
                <AccountCircleIcon onClick={handleShowAccount}/>
                <Div active={active}>
                    <Button onClick={handleShowAccount}> X </Button>
                    <Content>
                        <h1>{nome}</h1>
                        <button onClick={handleDeleteAccount}> Excluir conta</button>
                    </Content>
                </Div>

        </Container>
    )
 }