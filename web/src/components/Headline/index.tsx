import { cva, type VariantProps } from "class-variance-authority";

const headlineVariants = cva('text-[#1F2025] font-bold', {
    variants: {
        size: {
            default: 'text-lg',
            xl: 'text-2xl',
        }
    },
    defaultVariants: {
        size: 'default'
    }
})

interface HeadlineProps extends VariantProps<typeof headlineVariants> {
    text: string;
}



export default function Headline({ text, size }: HeadlineProps) {
    return(
        <h3 className={headlineVariants({ size })}>{text}</h3>
    )
}