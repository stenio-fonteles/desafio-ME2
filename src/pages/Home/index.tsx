import Grid from '../../components/Grid'
import Header from '../../components/Header'
import { useAuth } from '../../hooks/useAth'
import { Img,Component,GlobalStyle,Paragrafo, H1,H3} from './styled'
import { Alert } from '@mui/material'
import Maps from '../../components/Maps'

export default function Home() {
    const {userData} = useAuth();
    console.log(userData)
    return (
    <>
        <Component>
            <Header user={userData.name}/>
            <GlobalStyle/>
            <Img src={"https://c4.wallpaperflare.com/wallpaper/740/340/1004/bmw-m-1000-rr-motorcycle-hd-wallpaper-preview.jpg"}/>
            <H3>
                <Alert severity="success">A mais amada do Brasil</Alert>
            </H3>
            <H1>BMW M 1000 RR</H1>
            <Paragrafo>O encontro entre a tradição autêntica e a tecnologia moderna cria força, estilo e uma experiência
                    de pilotagem pura e preservada, seja na cidade ou nas estradas rurais</Paragrafo>
        </Component>
        <Grid/>
        <Maps/>
    </>
    )
}