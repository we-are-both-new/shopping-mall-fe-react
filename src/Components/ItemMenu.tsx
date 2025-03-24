import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { setFilterItem } from "../redux/itemsSlice";

const Items = [
    { link: "/", menu: "All" },
    { link: "/woman", menu: "Woman" },
    { link: "/man", menu: "Man" },
    { link: "/baby", menu: "Baby" },
    { link: "/kids", menu: "Kids" },
];
const ItemMenu = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const items = useSelector((state: RootState) => state.items.items);

    const handleFilter = (category: string, path: string) => {
        navigate(path);

        if (category === "All") {
            dispatch(setFilterItem(items));
        } else {
            const filtered = items.filter((item) => item.category.some((cat) => cat.toLowerCase() === category.toLowerCase()));
            dispatch(setFilterItem(filtered));
        }
    };
    return (
        <div className="sticky top-25 sm:top-30 z-50 bg-white ">
            <div className="flex justify-center items-center pt-4 pb-4 xl:pt-5 xl:pb-5 border-b">
                {Items.map((item, index) => (
                    <StyledLink
                        className={`ml-5 mr-5 ${location.pathname === item.link ? "active" : ""}`}
                        key={index}
                        to={item.link}
                        onClick={(e) => {
                            e.preventDefault();
                            handleFilter(item.menu, item.link);
                        }}
                    >
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
