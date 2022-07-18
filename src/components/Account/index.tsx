import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import { Me2Api } from '../../apis/Me2';
import { useAuth } from '../../hooks/useAth';
import {Div,Container,Button,Content,Grid, Img, Flex, P,Buttons,InputTextArea} from './styled'

type TData = {
    id: string
    nome: string
}

type TAddress = {

    logradouro: string,
    estado:string,
    localidade:string,
    bairro:string,
}

type TAbout = {
    url: string,
    address: TAddress,
    nome: string,
    valor:number
}
export default function UserAccount({nome, id}:TData) {
    const[active,setActive] = useState(false)
    const {isAuthenticated, logout, userData} = useAuth();
    const [motorcyclesChooseBuy, setMotorcycleChooseBuy] = useState([])
    const [newUser, setNewUser] = useState('') 
    function handleShowAccount() {
        setActive(oldState => !oldState)
    }
    
    async function handleEditAccount() {
        const usewnew = await Me2Api.patch(`/users/${userData.id}`, {
            name: newUser
        })
        logout()
        
    }

    function handleDeslogarAccount() {
        logout()
    }

    async function salesMotorcycle() {
      
        const {data} = await Me2Api.get('/sales')
        setMotorcycleChooseBuy(data)

    }




    useEffect(() => {salesMotorcycle()}, [])
    return(
        <Container>
                <AccountCircleIcon onClick={handleShowAccount} />
                <Div active={active}>
                    <Button onClick={handleShowAccount}> X </Button>
                    <Content>
                        <div>
                            <InputTextArea onChange={(e) =>{setNewUser(e.target.value)}} />
                            <Flex>
                                <Buttons onClick={handleEditAccount}> Editar</Buttons>
                                <Buttons onClick={handleDeslogarAccount}> Deslogar</Buttons>

                            </Flex>

                        </div>
                        <Grid>
                            <h1>{userData.name}</h1>
                            <h1>Suas compras</h1>
                            {motorcyclesChooseBuy.map((e:TAbout) =>{
                                return(
                                    <>
                                        <Container>
                                            <br/>
                                            <P>{e.nome}</P>
                                            <P>{e.valor}</P>
                                            <Img src={e.url}/>
                                            <P>{e.address.estado}</P>
                                            <P>{e.address.localidade}</P>
                                            <P>{e.address.bairro}</P>
                                            <P>{e.address.logradouro}</P>
                                            <hr/>
                                        </Container>
                                    </>
                                )
                            })}
                        </Grid>
                    </Content>
                </Div>

        </Container>
    )
 }