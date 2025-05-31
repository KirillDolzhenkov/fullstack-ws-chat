import * as React                           from 'react'
import { io, Socket }                       from 'socket.io-client';
import { useLocation }                      from 'react-router-dom';
import EmojiPicker, {EmojiClickData, Theme} from 'emoji-picker-react';

import emojiSVG                        from '@/assets/emoji.svg';
import { Button, InputField }          from '@/components';
import { MessageData, MessagePayload } from '@/pages/chat-page/chat-page.types';

import { DV } from '../../../utils';

import { ChatPageMessages } from './components';
import s                    from './chat-page.styles.module.css';


const socket: Socket = io('http://localhost:5000');

export const ChatPage = () => {
    const { search } = useLocation();
    const [ params, setParams ] = React.useState({name: '', room: ''});

    const [ state, setState ] = React.useState<MessageData[]>([]);
    const [ message, setMessage ] = React.useState('');
    const [ isOpen, setIsOpen ] = React.useState(false);

    React.useEffect(() => {
        const searchParams = Object.fromEntries(new URLSearchParams(search));

        if (!DV.isValid(searchParams.name) || !DV.isValid(searchParams.chat)) {
            console.error('Name or chat room is missing in URL parameters');

            return;
        }

        setParams({
            name: searchParams.name,
            room: searchParams.chat
        });

        socket.emit('join', {
            name: searchParams.name,
            room: searchParams.chat
        });

        return () => {
            //socket.emit('leave', { room: searchParams.chat });
            socket.off('message');
        };
    }, [search]);

    React.useEffect(() => {
        /*todo: refactor types*/
        const handleMessage = ({ data }: MessagePayload) => {
            const { message, user } = data;

            if(DV.isValid(message)) {
                setState((_prevState) => [..._prevState, { message, user }]);
            }
        };

        socket.on('message', handleMessage);

        return () => {
            socket.off('message', handleMessage);
        };
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setMessage(value);
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (DV.isValid(message.trim())) {
            socket.emit('sendMessage', {
                message,
                params: {
                    name: params.name,
                    room: params.room
                }
            });

            setMessage('');
        }
    };
    const onEmojiClick = ({emoji}: EmojiClickData) => {
        setMessage((_prevMessage) => `${_prevMessage} ${emoji}`);
    };

    return (
        <div className={s.wrap}>
            <div className={s.container}>
                <div className={s.header}>
                    <div className={s.title}>
                        {params?.room}
                    </div>
                    <div className={s.users}>
                        0 user in this room
                    </div>
                    <Button
                        variant={'secondary'}
                        onClick={() => {}}
                    >
                        Leave
                    </Button>
                </div>
                <div className={s.messages}>
                    {/*todo: add id's to messages*/}
                    {DV.isValidArray(state) && (
                        <ChatPageMessages
                            messages={state}
                            name={params.name}
                        />
                    )}
                </div>
                <form className={s.form} onSubmit={handleSubmit}>
                    <div className={s.emojies}>
                        <EmojiPicker
                            onEmojiClick={onEmojiClick}
                            reactionsDefaultOpen={true}
                        />
                    </div>
                    <div className={s.input}>
                        <InputField
                            name={'message'}
                            value={message}
                            placeholder={'Type something...'}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={s.emoji}>
                        <img
                            src={emojiSVG}
                            alt={'emoji'}
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        />

                        {isOpen && (
                            <div className={s.emojies}>
                                <EmojiPicker
                                    onEmojiClick={onEmojiClick}
                                    theme={Theme.DARK}
                                />
                            </div>
                        )}
                    </div>
                    {/*todo: add styles*/}
                    <Button
                        variant={'outlined'}
                        type={'submit'}
                        className={s.submit}
                    >
                        Send
                    </Button>
                </form>
            </div>
        </div>
    );
};