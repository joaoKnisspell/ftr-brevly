import CentralizedPageContent from "@/components/CentralizedPageContent";
import useRedirect from "@/hooks/useRedirect";

export default function RedirectPage(){

    const { data } = useRedirect()
    
    return(
        <CentralizedPageContent img="logoImg" headline="Redirecionando..." text="O link será aberto automaticamente em alguns instantes. Não foi redirecionado?"
        linkText="Acesse aqui" linkHref={data?.url} />
    )
}