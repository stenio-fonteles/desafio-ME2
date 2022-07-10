import { useNavigate } from 'react-router-dom'
import  Button  from '../Button/index'
import { GlobalStyle, Container, Img, H3, P, Div} from "./styled"


type TDataUser = {
    image: string,
    nome: string,
    potencia: number,
    valor:number,
    id:number
}

export default function Card({image, nome, potencia, valor,id }:TDataUser){
    const navigator = useNavigate()

    function teste(){
        navigator('/descricao/' + id )
    }

    return(
        <>
        <GlobalStyle/>
            <Container>
                <Img src={image}/>
                <Div>
                    <H3>{nome}</H3>
                    <Button value={"Detalhes"} key={id} click={teste}/>
                </Div>
                <Div>
                    <P>{potencia} cv</P>
                    <P>R$: {valor}</P>
                </Div>
            </Container>
        </>
    )
}