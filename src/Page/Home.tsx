import { Link } from "react-router";
import Search from "../Components/Search";

const items = [
    {
        goods: "Jacquard-weave top",
        price: "39,900",
        src: "https://res.cloudinary.com/dyoj0undj/image/upload/v1679837632/ophtekkvf1oyhya8fdwe.jpg",
    },
    {
        goods: "스트레이트 팬츠",
        price: "59,900",
        src: "https://res.cloudinary.com/dyoj0undj/image/upload/v1679837681/qjujhpcmmykyoygm2oyg.jpg",
    },
    {
        goods: "새틴 드레스",
        price: "69,000",
        src: "https://res.cloudinary.com/dyoj0undj/image/upload/v1679931154/hsjk6ntz6cd9kn7t6n2a.jpg",
    },
];

// const productSchema = Schema(
//     {
//       sku: { type: String, required: true, unique: true },
//       name: { type: String, required: true },
//       image: { type: String, required: true },
//       category: { type: Array, required: true },
//       description: { type: String, required: true },
//       price: { type: Number, required: true },
//       stock: { type: Object, required: true },
//       status: { type: String, default: "active" },
//       isDeleted: { type: Boolean, default: false },
//     },
//     { timestamps: true }
//   );

const Home = () => {
    return (
        <section>
            <div className="w-full ml-auto mr-auto xl:container ">
                <div className="row">
                    <Search />
                    {items.map((items, index) => (
                        <div key={index} className={`items ${index !== 0 ? "xl:-mt-20" : ""}`}>
                            <div className={`flex flex-wrap items-center group ${index % 2 !== 0 ? "flex-row-reverse" : null}`}>
                                <div className={`w-1/2 xl:pl-20 xl:pr-20`}>
                                    <div className="overflow-hidden">
                                        <img className="transition-all scale-100 md:group-hover:scale-110 " src={items.src} alt={`${items.goods} 이미지`} />
                                    </div>
                                </div>
                                <div className={`w-1/2 pl-10 pr-10 transition-all xl:pl-20 xl:pr-20  ${index % 2 !== 0 ? "text-right md:group-hover:pr-30" : "md:group-hover:pl-30"}`}>
                                    <Link to={"/"} className="text-xl font-bold keep-all block xl:text-2xl xl:leading-loose">
                                        {items.goods}
                                    </Link>
                                    <p>₩ {items.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
