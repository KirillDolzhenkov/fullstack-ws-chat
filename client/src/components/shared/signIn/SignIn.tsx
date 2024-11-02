import s from './SignIn.module.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {InputField} from "@/components";

const FIELDS = {
    USERNAME: 'username',
    ROOM: 'room',
};

export const SignIn = () => {
    const { USERNAME, ROOM } = FIELDS;
    const [values, setValues] = useState({ [USERNAME]: '', [ROOM]: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> ) => {
        const isDisabled = Object.values(values).some((value) => !value);
        if (isDisabled) e.preventDefault();

    };

    return (
        <div className={s.wrap}>
            <h1 className={s.heading}>Join</h1>
            <form className={s.form}>
                <InputField
                    name={USERNAME}
                    value={values[USERNAME]}
                    placeholder="Enter name"
                    onChange={handleChange}
                />
                <InputField
                    name={ROOM}
                    value={values[ROOM]}
                    placeholder="Room"
                    onChange={handleChange}
                />
                <Link onClick={handleSubmit} className={s.group} to={`/chat?name=${values[USERNAME]}&chat=${values[ROOM]}`}>
                    <button type="submit" className={s.button}>
                        Sign in
                    </button>
                </Link>
            </form>
        </div>
    );
};
