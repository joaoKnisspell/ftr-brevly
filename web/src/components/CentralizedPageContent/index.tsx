import { Link } from "react-router";
import LogoIcon from '@/assets/Logo_Icon.svg'
import NotFoundIcon from '@/assets/404.svg'
import Text from "../Text";
import Card from "../Card";
import Headline from "../Headline";

interface CentralizedPageContentProps {
    headline: string;
    text: string;
    img: 'logoImg' | 'notFoundImg';
    linkText: string;
    linkHref: string;
}

export default function CentralizedPageContent({ headline, text, img, linkText, linkHref }: CentralizedPageContentProps) {
    return(
        <Card size={"lg"}>
        <img data-img={img} className="data-[img=logoImg]:w-12 w-[194px]" alt="logo" src={img === 'logoImg' ? LogoIcon : NotFoundIcon} />
        <Headline size={"xl"} align={"center"} text={headline} />
        <Text data-img={img} text={text} className="max-w-[484px] text-center! lg:text-left">
            <Link to={linkHref} className="inline">
                <Text  type={"link"} text={linkText} />
            </Link>
        </Text>

    </Card> 
    )
}