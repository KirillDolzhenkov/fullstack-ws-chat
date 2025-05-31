import * as React from 'react';

export type ButtonTypes<T extends React.ElementType = 'button'> = {
    as?: T
    children?: React.ReactNode
    className?: string
    fullWidth?: boolean
    variant?: 'outlined' | 'primary' | 'secondary' | 'text'
} & React.ComponentPropsWithoutRef<T>