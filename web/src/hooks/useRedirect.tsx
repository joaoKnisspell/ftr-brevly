import api from "@/services/api"
import { endpoints } from "@/services/endpoints"
import { useQuery } from "@tanstack/react-query"
import { useLocation } from "react-router"

export default function useRedirect(){

    const { pathname } = useLocation()
    const slug = pathname.slice(1)

    const { data, isFetching } = useQuery({
        queryKey: ["redirect", slug],
        queryFn: async () => {
            const data = await api.get(endpoints.links.getBySlug(slug))
            console.log(data)
        },
    })


    return {
        data, 
        isFetching
    }
}