import { ReactNode } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ItemMenu from "../Components/ItemMenu";
import { useLocation } from "react-router";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    const location = useLocation();
    const hideItemsRoutes = ["/mypage", "/login", "/cart", "/join"];

    return (
        <div className="app-layout">
            <Header />
            {!hideItemsRoutes.includes(location.pathname) && <ItemMenu />}
            <main className="main-content">{children}</main>
            <Footer />
        </div>
    );
};

export default AppLayout;
