import {Routes, Route} from "react-router-dom";
import {Chat, SignIn} from "@/components";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="*" element={<SignIn/>}/>
            <Route path="404" element={<div>404</div>}/>
        </Routes>

    );
};