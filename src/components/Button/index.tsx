import Button from '@mui/material/Button';

type TProps={
    value: string,
    click():void,
    to: any
}
export default function ButtonForm({value,click, to}:TProps) {
    return(
        <>
            <Button variant="contained" onClick={click} to={to} > {value} </Button>
        </>
    )
}