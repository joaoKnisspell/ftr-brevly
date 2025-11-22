import api from "@/services/api"
import { endpoints } from "@/services/endpoints"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"

export default function useRedirect(){

    const { pathname } = useLocation()
    const slug = pathname.slice(1)

    const navigate = useNavigate()

    const { data, error, isFetching } = useQuery({
        queryKey: ["redirect", slug],
        queryFn: async () => {
            const { data } = await api.get(endpoints.links.getBySlug(slug))
            
            return data
        },
        retry: false
    })

    useEffect(() => {
        if(!data && !error) return;

        if(data?.url) return window.location.href = data.url

        return navigate("/url/not-found")

    }, [data, error, navigate])


    return {
        data, 
        isFetching
    }
}