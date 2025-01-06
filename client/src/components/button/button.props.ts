import {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";

export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    children?: ReactNode
    className?: string
    fullWidth?: boolean
    variant?: 'outlined' | 'primary' | 'secondary' | 'text'
} & ComponentPropsWithoutRef<T>