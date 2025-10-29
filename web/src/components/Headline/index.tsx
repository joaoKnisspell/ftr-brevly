import { cva, type VariantProps } from "class-variance-authority";

const headlineVariants = cva('text-[#1F2025] font-bold text-center w-full', {
    variants: {
        size: {
            default: 'text-lg',
            xl: 'text-2xl',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
        }
    },
    defaultVariants: {
        size: 'default',
        align: 'left',
    }
})

interface HeadlineProps extends VariantProps<typeof headlineVariants> {
    text: string;
}



export default function Headline({ text, size, align }: HeadlineProps) {
    return(
        <h3 className={headlineVariants({ size, align })}>{text}</h3>
    )
}