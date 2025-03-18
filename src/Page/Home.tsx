import { Link } from "react-router";
import Search from "../Components/Search";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { getProducts } from "../redux/itemsSlice";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>(); // dispatch에 AppDispatch 타입을 지정
    const items = useSelector((state: RootState) => state.items.items);
    const filterItems = useSelector((state: RootState) => state.items.filterItems);
    const loading = useSelector((state: RootState) => state.items.loading);
    const error = useSelector((state: RootState) => state.items.error);

    // 필터가 있을 경우 필터된 항목을 사용
    const itemsToDisplay = filterItems.length > 0 ? filterItems : items;

    useEffect(() => {
        dispatch(getProducts()); // getProducts 액션 호출
    }, [dispatch]);
    if (loading) return <p>Loading...</p>;

    // 에러가 발생한 경우 에러 메시지 출력
    if (error) return <p>Error: {error}</p>;

    return (
        <section>
            <div className="w-full ml-auto mr-auto xl:container ">
                <div className="row">
                    <Search />
                    {itemsToDisplay.length === 0 ? (
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
                </div>
            </div>
        </section>
    );
};

export default Home;
