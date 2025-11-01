import CentralizedPageContent from "@/components/CentralizedPageContent";

export default function NotFoundPage(){
    return(
        <CentralizedPageContent img="notFoundImg" headline="Link não encontrado" text="O link que você está tentando acessar não existe, foi removido ou é uma URL inválida. Saiba mais em" linkText="brev.ly." linkHref="/" />
    )
}