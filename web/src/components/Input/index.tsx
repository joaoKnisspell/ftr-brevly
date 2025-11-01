import { Input as ShadcnInput } from "../ui/input"
import { Label } from "../ui/label"

interface InputProps extends React.ComponentProps<typeof ShadcnInput> {
    labelText: string
}

export default function Input({ labelText, ...props }:InputProps){
    return(
        <div className="w-full flex flex-col gap-2">
            <Label>{labelText}</Label>
            <ShadcnInput {...props} />
        </div>
    )
}