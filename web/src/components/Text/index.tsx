import { cva, type VariantProps } from "class-variance-authority"

const textVariants = cva('', {
    variants: {
        size:  {
            sm: 'text-xs',
            md: 'text-sm',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
        },
        weight: {
            semiBold: 'font-semibold',
            regular: 'font-normal',
        },
        type: {
            text: 'text-[#4D505C]',
            link: 'text-[#2C46B1] underline'
        }
    },
    defaultVariants: {
        size: 'md',
        align: 'left',
        weight: 'semiBold',
        type: 'text'
    }
})

interface TextProps extends VariantProps<typeof textVariants> {
    text: string
}

export default function Text({ text, size, align, weight, type }: TextProps) {
    return(
        <p className={textVariants({ size, align, weight, type })}>{text}</p>
    )
}