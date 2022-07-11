import { useEffect, useState } from 'react';
import { Me2Api } from '../../apis/Me2';

import Card from '../Card'
import { Template, GlobalStyle} from './styled'

type TData = {
    url: string,
    nome: string,
    potencia: number,
    valor: number,
    id: number
}

export default function Grid () {
    const [motorcycle, setMotorcycles] = useState<TData[]>([])
    
    async function getMotorcycles() {
        const {data} = await Me2Api.get("/motorcycles");
        console.log(data)
        setMotorcycles(data)
    }

    useEffect(() =>{
        getMotorcycles()
    },[])

    return (
        <>
        <GlobalStyle />
            <Template >
                {motorcycle.map((e) => {
                    return (
                            <Card key={e.id} image={e.url} nome={e.nome} potencia={e.potencia} valor={e.valor} id={e.id} />
                    )
                })}
            </Template> 
        </>
        
    )
}