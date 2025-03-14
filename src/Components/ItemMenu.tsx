import { Link } from "react-router";
import styled from "styled-components";

const Items = [
    { link: "/women", menu: "Women" },
    { link: "/men", menu: "Men" },
    { link: "/baby", menu: "Baby" },
    { link: "/kids", menu: "Kids" },
];
const ItemMenu = () => {
    return (
        <div className="sticky top-25 sm:top-30 z-50 bg-white ">
            <div className="flex justify-center items-center pt-4 pb-4 xl:pt-5 xl:pb-5 border-b">
                {Items.map((item, index) => (
                    <StyledLink className="ml-5 mr-5" key={index} to={item.link}>
                        {item.menu}
                    </StyledLink>
                ))}
            </div>
        </div>
    );
};

const StyledLink = styled(Link)`
    display: inline-block;
    transition: all 0.2s;
    will-change: font-weight;
    &:hover,
    &.active {
        font-weight: 500;
        color: rgb(204, 7, 30);
    }
`;

export default ItemMenu;
