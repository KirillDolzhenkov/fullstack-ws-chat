import {useEffect, useState} from "react";
import {io, Socket} from "socket.io-client";
import {useLocation} from "react-router-dom";

const socket: Socket = io('http://localhost:5000');

export const ChatPage = () => {
    const {search} = useLocation();

    const [params, setParams] = useState<Record<string, string> | null>(null);
    console.log(params)

    useEffect(() => {
        const searchParams = Object.fromEntries(new URLSearchParams(search));
        setParams(searchParams);

        socket.emit('join', {
            name: searchParams.username,
            room: searchParams.chat
        });
    }, [search]);

    useEffect(() => {
        socket.on('message', ({data}) => {
            const {message} = data
            console.log(message)
        })
    }, []);

    return (
        <div>
            Chat
        </div>
    );
};