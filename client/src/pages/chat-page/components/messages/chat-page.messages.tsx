import { DT } from "../../../../../../utils";

import {ChatPageMessagesProps} from "./chat-page.messages.props";

import s from './chat-page.messages.styles.module.css';

export const ChatPageMessages = (props: ChatPageMessagesProps) => {
    const { messages, name } = props;

    return (
        <div className={s.messages}>
            {messages?.map(
                ({user, message}, index) => {

                    const isMe = DT.toNormalizeStr(user.name) === DT.toNormalizeStr(name);
                    const className = isMe ? s.me : s.user;

                    return (
                        <div key={index} className={`${s.message} ${className}`}>
                            <span className={s.user}>{user.name}</span>

                            <div className={s.text}>{message}</div>
                        </div>
                    );
                }
            )}
        </div>
    );
};