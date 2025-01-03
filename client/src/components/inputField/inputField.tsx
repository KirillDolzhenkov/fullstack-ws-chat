import s from "@/pages/signInPage/SignInPage.module.css";
import {InputFieldProps} from "./inputFieldProps";

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