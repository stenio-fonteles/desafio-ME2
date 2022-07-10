import { GlobalStyle,H1, Div} from "./styled";
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
type TData = {
    user:any;
}

export default function Header({user}) {
    return(
        <Div>
            <GlobalStyle/>
            {/* <AccountCircleIcon/> */}
            <H1>{user}</H1>
        </Div>
    )
}