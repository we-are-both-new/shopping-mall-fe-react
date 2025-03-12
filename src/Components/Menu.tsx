import { useLocation } from "react-router";
import { Link } from "react-router";
import styled from "styled-components";

const menus = [
    { link: "/login", name: "로그인" },
    { link: "/cart", name: "장바구니" },
    { link: "/mypage", name: "마이페이지" },
];
interface ImenuProps {
    setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const Menu = ({ setIsMenuOpen }: ImenuProps) => {
    const location = useLocation();
    return (
        <>
            {menus.map((menu, index) => {
                const isActive = location.pathname === menu.link;
                return (
                    <StyledLink key={index} to={menu.link} onClick={() => setIsMenuOpen && setIsMenuOpen(false)} data-active={isActive}>
                        {menu.name}
                    </StyledLink>
                );
            })}
        </>
    );
};

const StyledLink = styled(Link)<{ "data-active": boolean }>`
    font-weight: ${(props) => (props["data-active"] ? "bold" : "normal")};
    transition: all 0.2s;
    &:hover {
        font-weight: bold;
    }
`;
export default Menu;
