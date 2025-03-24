import { useParams, Link } from "react-router"; // useParams 추가
import Search from "../Components/Search";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { setFilterItem } from "../redux/itemsSlice";

const List = () => {
    const { category } = useParams(); // URL에서 category 가져오기
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.items.items);
    const filterItems = useSelector((state: RootState) => state.items.filterItems);
    const loading = useSelector((state: RootState) => state.items.loading);
    const error = useSelector((state: RootState) => state.items.error);

    useEffect(() => {
        if (!category || category === "all") {
            dispatch(setFilterItem(items));
        } else {
            const filtered = items.filter((item) => item.category.some((cat) => cat.toLowerCase() === category.toLowerCase()));
            dispatch(setFilterItem(filtered));
        }
    }, [category, items, dispatch]);

    const itemsToDisplay = filterItems.length > 0 ? filterItems : items;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Search />
            {itemsToDisplay.length === 0 || filterItems.length === 0 ? (
                <p className="text-center h-full pt-60 pb-60">일치하는 상품이 없습니다.</p>
            ) : (
                <>
                    {itemsToDisplay.map((item, index) => (
                        <div key={item._id} className={`items ${index !== 0 ? "xl:-mt-20" : ""}`}>
                            <div className={`flex flex-wrap items-center group ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                                <div className="w-1/2 xl:pl-20 xl:pr-20">
                                    <div className="overflow-hidden">
                                        <img className="transition-all scale-100 md:group-hover:scale-110" src={item.thumbnail} alt={`${item.name} 이미지`} />
                                    </div>
                                </div>
                                <div className={`w-1/2 pl-10 pr-10 transition-all xl:pl-20 xl:pr-20 ${index % 2 !== 0 ? "text-right md:group-hover:pr-30" : "md:group-hover:pl-30"}`}>
                                    <Link to={`/detail/${item._id}`} className="text-xl font-bold keep-all block xl:text-2xl xl:leading-loose">
                                        {item.name}
                                    </Link>
                                    <p>₩ {item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
};

export default List;
