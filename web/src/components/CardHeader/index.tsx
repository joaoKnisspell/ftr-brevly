import Headline from "../Headline";

interface CardHeaderProps {
    headlineText: string
    children?: React.ReactNode
}

export default function CardHeader({ headlineText, children }: CardHeaderProps) {
    return(
        <header className="w-full flex items-center justify-between pb-4 border-b border-gray-200 lg:pb-5">
            <Headline text={headlineText} />
            {children}
        </header>
    )
}