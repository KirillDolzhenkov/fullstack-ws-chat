import s from '@/pages/sign-in-page/sign-In-page.styles.module.css';

import { InputFieldTypes } from './input-field.types';

export const InputField = (props: InputFieldTypes) => {
    const {
        name,
        value,
        placeholder,
        onChange
    } = props;

    return (
        <div className={s.group}>
            <input
                type={'text'}
                name={name}
                value={value}
                placeholder={placeholder}
                className={s.input}
                onChange={onChange}
                autoComplete={'off'}
                required
            />
        </div>
    )
}