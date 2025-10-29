import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva('rounded-lg bg-white max-w-[580px] w-full flex flex-col items-center gap-5', {
    variants: {
        size: {
            'md': 'p-6 md:p-8',
            'lg': 'px-5 py-12 md:px-12 md:py-16',
        },
    }, 
    defaultVariants: {
        size: 'md',
    }
})

interface CardProps extends VariantProps<typeof cardVariants> {
    children: React.ReactNode
}

export default function Card({ children, size }: CardProps) {
    return(
        <div className={cardVariants({ size })}>
            {children}
        </div>
    )
}