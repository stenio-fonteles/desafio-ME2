import { Template, GlobalStyle,Foto} from './styled'


export default function Grid () {

    const images = ["https://i.pinimg.com/originals/8c/5a/50/8c5a504e2267a79edf8d33f24ac7d3e8.jpg"
                    ,   'https://pbs.twimg.com/media/E2VCEHFXMAMHUpO.jpg:large',
                    'https://cdn.awsli.com.br/800x800/480/480360/produto/72248860/3cce188072.jpg',"https://i.pinimg.com/originals/8c/5a/50/8c5a504e2267a79edf8d33f24ac7d3e8.jpg"
                    ,   'https://pbs.twimg.com/media/E2VCEHFXMAMHUpO.jpg:large',
                    'https://cdn.awsli.com.br/800x800/480/480360/produto/72248860/3cce188072.jpg'
        ]
    return (
        <>
        <GlobalStyle/>
        <Template>
            {images.map((e) => {
                return (
                    <>
                        <Foto key={Math.random()} src={e}/>
                    </>
            )
            })}
        </Template>

        </>
    )
}