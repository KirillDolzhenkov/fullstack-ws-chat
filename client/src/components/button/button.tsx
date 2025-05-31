import * as React from 'react';
import clsx from       'clsx';

import { ButtonTypes } from './button.types';
import s from               './button.styles.module.css';


export const ButtonPolymorph = <T extends React.ElementType = 'button'>(props: ButtonTypes<T>, ref: any) => {
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

export const Button = React.forwardRef(ButtonPolymorph) as <T extends React.ElementType = 'button'>(
    props: {
        ref?: React.ForwardedRef<React.ElementRef<T>>
    } & ButtonTypes<T> &
        Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonTypes<T>>
) => ReturnType<typeof ButtonPolymorph>

