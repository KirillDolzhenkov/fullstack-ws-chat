import {
    ComponentPropsWithoutRef,
    ElementRef,
    ElementType,
    ForwardedRef,
    forwardRef,
} from 'react'
import clsx from "clsx";

import {ButtonProps} from "./button.props";

import s from './button.styles.module.css';


export const ButtonPolymorph = <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: any) => {
    const {
        as: Component = 'button',
        className,
        fullWidth,
        variant = 'primary',
        ...rest
    } = props

    return (
        <Component
            className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
            ref={ref}
            {...rest}
        />
    )
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
    props: {
        ref?: ForwardedRef<ElementRef<T>>
    } & ButtonProps<T> &
        Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => ReturnType<typeof ButtonPolymorph>

