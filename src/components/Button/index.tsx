import { Button } from   './styled'
type TProps={
    value: string,
    click:any
}
export default function ButtonForm({value,click}:TProps) {
    return(
        <>
            <Button onClick={click} > {value} </Button>
        </>
    )
}