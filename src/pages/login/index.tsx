import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonForm from "../../components/Button";
import Input from "../../components/Form/Input";

export default function Login () {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    function cadastro(){
        console.log("iai")
    }

    return (
        <>
            <Input value={"Nome:"} set={setName}/>
            <Input value={"Senha"} set={setPassword} />
            <div>
                <ButtonForm click={cadastro} value={'Cadastrar'} to={'/cadastro'}/>
                <ButtonForm value={'Login'}/>
                
            
            </div>

        
        </>
    )
}