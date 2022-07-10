import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Description from "../../components/Description";

import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAth";

import {  Wallpaper,Div, GlobalStyle,P,Caixa, Container,Ul} from "./styled";

type Tdata ={
    id: number;
    nome: string,
    potencia:number,
    valor:number,
    url:string,
    sobre:string
}
export default function Descricao(this: any) {
    const [objData, setObjData] = useState<Tdata>({} as Tdata)
    const {userData} = useAuth()
    const {id} = useParams()
    const [active, setActive] = useState(false)
    
   
    async function getBackground() {
        const {data} = await axios.get<Tdata[]>("/api/motorcycles");
        const chosseMotorcycle =  data.find((motorcycle) => motorcycle.id == Number(id))
        if(!chosseMotorcycle) return;
        setObjData(chosseMotorcycle)
    }
    
    useEffect(() =>{
        
        getBackground()
    }, [])



    const arrTets = [{key: 1,motor:'motor', text:'Com desempenho esportivo e empolgante, o icônico motor tetra cilíndrico DOHC de 16 válvulas com 649 cm3 tem excelente entrega de potência em todas as faixas rotações. Sua potência máxima de 88,4 cvà 11.500 rpm e torque de 6,13 kgm.fa 8.000 rpm garantem alta performance ao pilotar, além do icônico som dos quatro cilindros Honda.'},
    {key: 2, motos:'motor', text:'Com desempenho esportivo e empolgante, o icônico motor tetra cilíndrico DOHC de 16 válvulas com 649 cm3 tem excelente entrega de potência em todas as faixas rotações. Sua potência máxima de 88,4 cvà 11.500 rpm e torque de 6,13 kgm.fa 8.000 rpm garantem alta performance ao pilotar, além do icônico som dos quatro cilindros Honda.'}]
    
        return (
            <Div>
                <GlobalStyle/>
                <Header user={userData.name}/>
                <Wallpaper url={objData.url}>
                <Caixa>
                    <P>{objData.nome}</P>
                    <h3>{objData.sobre}</h3>
                </Caixa>
                </Wallpaper>

                <Container>
                    <h1>Especificações/Ficha Técnica</h1>
                    <Ul>
                        <Description content={'Com desempenho esportivo e empolgante, o icônico motor tetra cilíndrico DOHC de 16 válvulas com 649 cm3 tem excelente entrega de potência em todas as faixas rotações. Sua potência máxima de 88,4 cvà 11.500 rpm e torque de 6,13 kgm.fa 8.000 rpm garantem alta performance ao pilotar, além do icônico som dos quatro cilindros Honda.'} title={'motor'}/>
                        <Description content={'O câmbio de 6 marchas da CBR 650R oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves. A embreagem do tipo deslizante previne repentinas perdas de aderência da roda traseira no caso de reduções de marcha extremas, frequentes na pilotagem esportiva, enquanto o acionamento da embreagem se vale de assistência no manete, que reduz em 12% o esforço necessário para o acionamento da alavanca.'} title={'EMBREAGEM DESLIZANTE'}/>
                        <Description content={'A CBR 650R possui suspensão invertida do tipo SeparateFunctionFront Fork(SFF) e amortecedor com estrutura Big PistonFront Fork(BPF), conjunto este que reduz o peso não-suspenso da motocicleta. Além de firmeza e respostas mais precisas, você tem mais estabilidade durante a pilotagem.'} title={'SUSPENSÃO INVERTIDA'}/>
                    </Ul>
                </Container>
                
            </Div>
        )
}