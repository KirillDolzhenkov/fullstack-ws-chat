export interface User {
    name: string;
}
export interface MessageData {
    user: User;
    message: string;
}

export interface MessagePayload {
    data: MessageData;
}