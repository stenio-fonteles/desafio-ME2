import Grid from '../../components/Grid'
import Header from '../../components/Header'
import { useAuth } from '../../hooks/useAth'
import { Img,Component,GlobalStyle,Paragrafo, H1,H3,Video} from './styled'
import { Alert } from '@mui/material'
import Maps from '../../components/Maps'
import { useEffect, useState } from 'react'

export default function Home() {
    const {userData} = useAuth();
    const [video, setVideo] = useState('') 

    useEffect(() =>{
        setVideo("https://cdn-videos.honda.com.br/nc750x/video/Honda_NC_750X_indie_rock_cut.webm")
    })

    return (
    <>
        <Component>
            <Header user={userData.name}/>
            <GlobalStyle/>
                <Video autoPlay loop muted  src={video}></Video>
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