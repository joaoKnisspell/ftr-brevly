interface CardProps {
    children: React.ReactNode
}

export default function Card({ children }: CardProps) {
    return(
        <div className="p-6 rounded-lg bg-white max-w-[580px] w-full flex flex-col gap-5 lg:8">
            {children}
        </div>
    )
}