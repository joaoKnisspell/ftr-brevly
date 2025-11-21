import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva('rounded-lg bg-white flex flex-col items-center gap-5 min-h-[214px] lg:min-h-[234px]', {
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
    children: React.ReactNode;
    className?: string
}

export default function Card({ children, size, className }: CardProps) {
    return(
        <div className={cardVariants({ size, className })}>
            {children}
        </div>
    )
}