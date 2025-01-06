import {MessageData} from "@/pages/chat-page/chat-page.types";

export interface ChatPageMessagesProps {
    messages: MessageData[];
    name: string;
}