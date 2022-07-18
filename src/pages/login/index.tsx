import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonForm from "../../components/Button";
import Input from "../../components/Form/Input";
import { Div,Container,TitleLogin } from './styled'
import { FormEvent } from 'react';
import { useAuth } from '../../hooks/useAth';
type TDataLogin = {
    name: string,
    password: string,
}
export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // criando dashboard no grafana com metricas do zabbix
    const navigator = useNavigate();
    const { doLogin } = useAuth();
    const [notAutorized , setNotAutorized] = useState('')
    
    async function handleSubmit(_event: FormEvent) {
      const response = await doLogin({
        email,
        password
      });
      
      
      if(!response) return setNotAutorized("Conta nao localizada")
      return navigator("/Home")
    }
 

    function handleNavegate(){
        navigator("/cadastro");
    }
    return (
            <Div>
                <Container>
                    <h1>{notAutorized}</h1>
                    <TitleLogin>Login</TitleLogin>
                    <Input value={"Nome::"} set={setEmail}/>
                    <Input value={"Senha:"} set={setPassword} />

                </Container>
                <Container>
                    <ButtonForm  value={'Cadastrar'} click={handleNavegate}/>
                    <ButtonForm value={'Login'} click={handleSubmit}/>
                </Container>
            </Div>

    )
}