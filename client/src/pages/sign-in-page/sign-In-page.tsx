import * as React from 'react';
import { Link }   from 'react-router-dom';


import { Button, InputField } from '@/components';

import s from './sign-In-page.styles.module.css';

const FIELDS = {
    USERNAME: 'username',
    ROOM: 'room',
};

export const SignInPage = () => {
    const {
        USERNAME,
        ROOM
    } = FIELDS;

    const [ values, setValues ] = React.useState({
        [USERNAME]: '',
        [ROOM]: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setValues((_prevValues) => ({..._prevValues, [name]: value}));
    };
    const handleSubmit = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const isDisabled = Object
            .values(values)
            .some((value) => !value);

        if (isDisabled) {
            event.preventDefault();
        }
    };

    return (
        <div className={s.wrap}>
            <div className={s.container}>
                <h1 className={s.heading}>Join</h1>
                <form className={s.form}>
                    <InputField
                        name={USERNAME}
                        value={values[USERNAME]}
                        placeholder={'Enter name'}
                        onChange={handleChange}
                    />
                    <InputField
                        name={ROOM}
                        value={values[ROOM]}
                        placeholder={'Room'}
                        onChange={handleChange}
                    />
                    <Link
                        onClick={handleSubmit}
                        className={s.group}
                        to={`/chat?name=${values[USERNAME]}&chat=${values[ROOM]}`}
                    >
                        <div className={s.button}>
                            <Button
                                type={'submit'}
                                variant={'primary'}
                                fullWidth
                            >
                                Sign in
                            </Button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    );
};
