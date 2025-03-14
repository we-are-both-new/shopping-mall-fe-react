import { Link } from "react-router";
import Search from "../Components/Search";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home = () => {
    const items = useSelector((state: RootState) => state.items.items);
    const filterItems = useSelector((state: RootState) => state.items.filterItems);
    const itemsToDisplay = filterItems.length > 0 ? filterItems : items;
    const Result = useSelector((state: RootState) => state.items.noResult);
    return (
        <section>
            <div className="w-full ml-auto mr-auto xl:container ">
                <div className="row">
                    <Search />
                    {Result ? (
                        <p className="text-center h-full pt-60 pb-60">일치하는 상품이 없습니다.</p>
                    ) : (
                        <>
                            {itemsToDisplay.map((item, index) => (
                                <div key={index} className={`items ${index !== 0 ? "xl:-mt-20" : ""}`}>
                                    <div className={`flex flex-wrap items-center group ${index % 2 !== 0 ? "flex-row-reverse" : null}`}>
                                        <div className={`w-1/2 xl:pl-20 xl:pr-20`}>
                                            <div className="overflow-hidden">
                                                <img className="transition-all scale-100 md:group-hover:scale-110 " src={item.src} alt={`${item.goods} 이미지`} />
                                            </div>
                                        </div>
                                        <div className={`w-1/2 pl-10 pr-10 transition-all xl:pl-20 xl:pr-20  ${index % 2 !== 0 ? "text-right md:group-hover:pr-30" : "md:group-hover:pl-30"}`}>
                                            <Link to={`/detail/${item.id}`} className="text-xl font-bold keep-all block xl:text-2xl xl:leading-loose">
                                                {item.goods}
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
