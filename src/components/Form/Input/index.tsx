import TextField from '@mui/material/TextField';


type TProps = {
    value: string,
    set: React.Dispatch<React.SetStateAction<string>>
}
export default function Input({value,set}:TProps) {
    
    return(
        <>
            <TextField  label={value}  onChange={(e) => {set(e.target.value)}}/>
        </>
    )
}
