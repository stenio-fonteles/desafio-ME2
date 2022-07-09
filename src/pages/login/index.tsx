import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonForm from "../../components/Button";
import Input from "../../components/Form/Input";
import { Div,Container } from './styled'
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
    
    async function handleSubmit(_event: FormEvent) {
  
      const response = await doLogin({
        email: "stenio",
        password: "sousa"
      });
  
      if(!response) return console.log("not authorized")
  
      return navigator("/Home")
    }
  

    function handleNavegate(){
        navigator("/cadastro");
    }

    return (

            <Div>
                <Container>
                    <h1>Login</h1>
                    <Input value={"Email:"} set={setEmail}/>
                    <Input value={"Senha"} set={setPassword} />

                </Container>
                <Container>
                    <ButtonForm  value={'Cadastrar'} click={handleNavegate}/>
                    <ButtonForm value={'Login'} click={handleSubmit}/>
                </Container>
            </Div>

    )
}