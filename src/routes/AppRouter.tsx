import { Routes, Route } from "react-router";
import Home from "../Page/Home";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default AppRouter;
