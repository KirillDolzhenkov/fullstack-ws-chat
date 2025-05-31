import * as React from 'react';

export interface InputFieldTypes {
    name: string;
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}