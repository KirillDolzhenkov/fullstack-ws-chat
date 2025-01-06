import {InputFieldProps} from "./input-field.props";

import s from "@/pages/sign-in-page/sign-In-page.styles.module.css";

export const InputField = (props: InputFieldProps) => {
    const {
        name,
        value,
        placeholder,
        onChange
    } = props;

    return (
        <div className={s.group}>
            <input
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
                className={s.input}
                onChange={onChange}
                autoComplete="off"
                required
            />
        </div>
    )
}