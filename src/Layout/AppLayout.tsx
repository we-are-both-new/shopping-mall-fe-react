import { ReactNode } from "react";
import Header from "../Components/Header";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="app-layout">
            <Header />
            {children}
        </div>
    );
};

export default AppLayout;
