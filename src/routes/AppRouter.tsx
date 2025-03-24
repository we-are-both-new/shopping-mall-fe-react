import { Routes, Route } from "react-router";
import Home from "../Page/Home";
import Cart from "../Page/Cart";
import Mypage from "../Page/Mypage";
import Login from "../Page/Login";
import Detail from "../Page/Detail";
import Join from "../Page/Join";
import List from "../Page/List";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<List />} />
            <Route path="join" element={<Join />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="mypage" element={<Mypage />} />

            <Route path="/detail/:id" element={<Detail />} />
        </Routes>
    );
};

export default AppRouter;
