import { Input as ShadcnInput } from "../ui/input"
import { Label } from "../ui/label"

interface InputProps extends React.ComponentProps<typeof ShadcnInput> {
    labelText: string
    prefixInput?: boolean
}

export default function Input({ labelText, prefixInput, ...props }:InputProps){

    if(prefixInput){
        return(
            <div className="w-full flex flex-col gap-2">
                <Label>{labelText}</Label>
                <div className="flex items-center border rounded-md px-4 h-12 focus-within:ring-3 focus-within:ring-ring/50 focus-within:border-ring">
                    <span className="text-sm text-gray-500 mr-0">brev.ly/</span>
                    
                    <ShadcnInput
                        {...props} 
                        placeholder="meu-site"
                        className="border-0 px-0 shadow-none focus-visible:ring-0"
                    />
                </div>
            </div>
        )
    } 

    return(
        <div className="w-full flex flex-col gap-2">
            <Label>{labelText}</Label>
            <ShadcnInput
                {...props}
                placeholder="www.exemplo.com.br"
            />
        </div>
    )
}