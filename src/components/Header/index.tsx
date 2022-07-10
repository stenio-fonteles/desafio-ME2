import { useNavigate } from "react-router-dom";
import ButtonForm from "../Button";
import { GlobalStyle,H1, Div,Ul} from "./styled";

type TData = {
    user:any;
}
export default function Header({user}:TData) {
function handleNavigateHome() {
    console.log("comprei")
    navigator('/home')
}


    const navigator = useNavigate()
    return(
        <Div>
            <GlobalStyle/>
            <H1>{user}</H1>
            <Ul>
                <li>
                    <ButtonForm value={"Conta"} key={Math.random()*100} click={''}/>
                </li>
                <li>
                    <img src={"https://w7.pngwing.com/pngs/189/368/png-transparent-honda-logo-honda-logo-car-motorcycle-honda-cr-v-moto-text-trademark-logo.png"}/>
                </li>
                <li>
                    <ButtonForm value={"Home"} key={Math.random()*100} click={handleNavigateHome}/>
                </li>
            </Ul>
        </Div>
    )
}