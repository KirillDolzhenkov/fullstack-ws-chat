import {Routes, Route} from "react-router-dom";
import {SignIn} from "@/components/signIn/SignIn.tsx";
import {Chat} from "../chat/Chat.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="*" element={<SignIn/>}/>
            <Route path="404" element={<div>404</div>}/>
        </Routes>

    );
};

export default AppRoutes;