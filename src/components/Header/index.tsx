import { useNavigate } from "react-router-dom";
import ButtonForm from "../Button";
import { GlobalStyle,H1, Div,Ul} from "./styled";
import UserAccount from '../Account/index'
import { useAuth } from "../../hooks/useAth";

type TData = {
    user:any;
}
export default function Header({user}:TData) {

    const {userData} = useAuth()

function handleNavigateHome() {
    navigator('/home')
}

    const navigator = useNavigate()
    return(
        <Div>
            <GlobalStyle/>
            <Ul>
                <UserAccount nome={userData.name} id={userData.id} />
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