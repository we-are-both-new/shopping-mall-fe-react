import { Link } from "react-router";
import SideMenu from "./SideMenu";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 group">
            <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
                <nav className="h-full">
                    <div className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
                        <div className="flex-1 basis-0 h-full flex items-center">
                            <div className="h-full">
                                <SideMenu />
                            </div>
                        </div>

                        <div className="flex items-center h-full">H&M</div>

                        <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
                            <div className="flex items-center justify-center gap-x-6 h-full">
                                <Link to="">로그인</Link>
                            </div>
                            <div className="flex items-center justify-center gap-x-6 h-full">
                                <Link to="">장바구니</Link>
                            </div>
                            <div className="flex items-center justify-center gap-x-6 h-full">
                                <Link to="">마이페이지</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <SideMenu />
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
