import { useQuery } from "@tanstack/react-query"
import api from "@/services/api"
import { endpoints } from "@/services/endpoints"

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

    return {
        data,
        isFetching
    }
}