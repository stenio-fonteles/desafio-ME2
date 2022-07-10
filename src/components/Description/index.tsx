import { useState } from "react"
import {DescriptionText, Container, Title} from "./styled"
type Tdata = {
    title: string,
    content: string
}
export default function Description ({title,content}:Tdata) {
    const [active, setActive] = useState(false)

    function handleActive() {
        setActive(oldState => !oldState)
    }

    return (
        <Container>
            <Title onClick={handleActive}>- {title} -</Title>
            <DescriptionText active={active}>{content}</DescriptionText>
        </Container>
    )
}