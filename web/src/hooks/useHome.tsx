/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query"
import api from "@/services/api"
import { endpoints } from "@/services/endpoints"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const newLinkSchema = z.object({
    url: z.url("Informe uma url válida."),
    slug: z.string("Informe uma url minúscula e sem espaço/caracter especial.").nonempty("Informe uma url minúscula e sem espaço/caracter especial."),
})


export default function useHome(){

    const { data, isFetching } = useQuery({
        queryKey: ["links-list"],
        queryFn: async () => {
            const { data } = await api.get(endpoints.links.get)
            return data
        },
        staleTime: 2000,
        enabled: true
    })

    const form = useForm<z.infer<typeof newLinkSchema>>({
        resolver: zodResolver(newLinkSchema)
    })


    function handleSubmit(values: z.infer<typeof newLinkSchema>){
        console.log(values)
    }

    return {
        data,
        isFetching,
        form,
        handleSubmit
    }
}