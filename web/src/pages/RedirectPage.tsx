import Card from "../components/Card";
import LogoIcon from '../assets/Logo_Icon.svg'
import Text from "../components/Text";
import Headline from "../components/Headline";
import { Link } from "react-router";

export default function RedirectPage(){
    return(
       <Card size={"lg"}>
        <img className="size-12" alt="logo" src={LogoIcon} />
        <Headline size={"xl"} align={"center"} text="Redirecionando..." />
        <div className="flex flex-col">
            <Text align={"center"} text="O link será aberto automaticamente em alguns instantes. " />
            <div className="flex items-center justify-center gap-1">
                <Text align={"center"} text="Não foi redirecionado?" />
                <Link to="/">
                    <Text align={"center"} type={"link"} text="Acesse aqui" />
                </Link>
            </div>
        </div>
       </Card> 
    )
}