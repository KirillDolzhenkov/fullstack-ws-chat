import {Routes, Route} from "react-router-dom";
import {HomePage} from "../homePage/HomePage.tsx";
import {Chat} from "../chat/Chat.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="*" element={<HomePage/>}/>
            <Route path="404" element={<div>404</div>}/>
        </Routes>

    );
};

export default AppRoutes;