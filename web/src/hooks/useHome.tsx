/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import api from "@/services/api"
import { endpoints } from "@/services/endpoints"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify"
import type { AxiosError } from "axios"

const newLinkSchema = z.object({
    url: z.url("Informe uma url válida."),
    slug: z.string("Informe uma url minúscula e sem espaço/caracter especial.").nonempty("Informe uma url minúscula e sem espaço/caracter especial."),
})


export default function useHome(){

    const queryClient = useQueryClient()

    const { data, isFetching } = useQuery({
        queryKey: ["links-list"],
        queryFn: async () => {
            const { data } = await api.get(endpoints.links.get)
            return data
        },
        staleTime: 2000,
        enabled: true
    })

    const { mutate: createLink, isPending: isCreateLinkPending } = useMutation({
        mutationKey: ["create-link"],
        mutationFn: async (payload: z.infer<typeof newLinkSchema>) => {
            const res = await api.post(endpoints.links.post, payload)
            return res.data
        },

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:["links-list"]})
            form.reset()
            toast.success("Link criado com sucesso!")
        },

        onError: (error: AxiosError<any>) => {
            const message =
            error?.response?.data?.error ||
            "Erro inesperado."
            toast.error(message)
            form.resetField("slug")
        }
    })

    const { mutate: deleteLink, isPending: isDeleteLinkPending } = useMutation({
        mutationKey: ["delete-link"],
        mutationFn: async (id: string) => {
            const res = await api.delete(endpoints.links.delete(id))
            return res.data
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["links-list"] })
            toast.success("Link excluído com sucesso.")
        },

        onError: (error: AxiosError<any>) => {
            toast.error("Erro ao deletar link.")
            console.error(error)
        }
    })

    const form = useForm<z.infer<typeof newLinkSchema>>({
        resolver: zodResolver(newLinkSchema)
    })


    function handleSubmit({ slug, url }: z.infer<typeof newLinkSchema>){
        createLink({
            slug,
            url
        })
    }

    function handleDeleteLink(id: string){
        deleteLink(id)
    }

    async function handleCopyLink(url: string){
        await navigator.clipboard.writeText(url).then(() => {
            toast.info("Link copiado com sucesso!")
        })
    }

    return {
        data,
        isFetching,
        form,
        isCreateLinkPending,
        isDeleteLinkPending,
        handleSubmit,
        handleDeleteLink,
        handleCopyLink
    }
}