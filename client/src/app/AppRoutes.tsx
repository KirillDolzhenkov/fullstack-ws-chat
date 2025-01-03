import {Routes, Route} from "react-router-dom";
import {ChatPage, SignInPage} from "@/pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<SignInPage/>}/>
            <Route path="/" element={<SignInPage/>}/>
            <Route path="/chat" element={<ChatPage/>}/>
            <Route path="404" element={<div>404</div>}/>
        </Routes>
    );
};