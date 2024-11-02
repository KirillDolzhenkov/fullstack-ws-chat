import s from "@/components/shared/signIn/SignIn.module.css";
import React from "react";

interface InputFieldProps {
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = (props: InputFieldProps) => {
    const {name, value, placeholder, onChange } = props;
    return(
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