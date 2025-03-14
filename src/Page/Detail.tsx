import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay, Navigation } from "swiper/modules";

import Select, { StylesConfig } from "react-select";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const options = [
    { value: "S", label: "Small" },
    { value: "M", label: "Medium" },
    { value: "L", label: "Large" },
];

// customStyles 정의
const customStyles: StylesConfig = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#f0f0f0", // 배경색
        borderColor: "#ccc", // 테두리 색상
        borderRadius: "8px", // 테두리 둥글기
        padding: "5px",
    }),
    option: (provided) => ({
        ...provided,
        color: "black", // 옵션 텍스트 색상
        padding: "10px",
        "&:hover": {
            backgroundColor: "#f0f0f0", // 옵션 hover 색상
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "#333", // 선택된 값 색상
    }),
};
const Detail = () => {
    const items = useSelector((state: RootState) => state.items.items);
    const { id } = useParams<{ id: string }>();
    const num = Number(id);

    return (
        <section>
            <div className="w-full ml-auto mr-auto xl:container ">
                <div className="row ">
                    <div className="w-full block sm:flex sm:justify-center pt-10 pb-10 ">
                        <div className="w-full sm:w-1/2">
                            <Swiper
                                effect="fade"
                                modules={[EffectFade, Pagination, Navigation, Autoplay]} // Autoplay 추가
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                fadeEffect={{ crossFade: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }} // 3초마다 자동 슬라이드
                                className="mySwiper w-[80%]"
                            >
                                <SwiperSlide>
                                    <img src={items[num].src} alt={`${items[num].goods} 이미지`} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={items[num].src} alt={`${items[num].goods} 이미지`} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={items[num].src} alt={`${items[num].goods} 이미지`} />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="w-full sm:w-1/2 pt-5 pb-5 pr- xl:pt-20 xl:pb-20">
                            <div className="ml-auto mr-auto w-[80%] flex flex-col justify-center h-full">
                                <h2 className="font-bold text-2xl xl:text-4xl mb-5">{items[num].goods}</h2>
                                <p className="font-500 mb-5">₩ {items[num].price}</p>
                                <h2 className="mb-10 sm:mb-auto">description</h2>
                                <Select
                                    className="w-full xl:w-1/2 mb-10"
                                    options={options}
                                    styles={customStyles} // 스타일 적용
                                    placeholder="Select size"
                                />
                                <button className="w-full xl:w-1/2 cursor-pointer mb-10 px-4 py-2 bg-[rgba(204,7,30,.8)] text-white rounded-lg hover:bg-[rgba(204,7,30,1)] transition-all">추가</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;

// 상품디테일
// const productSchema = Schema(
//     {
//       sku: { type: String, required: true, unique: true },
//       name: { type: String, required: true },
//       image: { type: String, required: true },
//       category: { type: Array, required: true },
//       description: { type: String, required: true },
//       price: { type: Number, required: true },
//       stock: { type: Object, required: true }, 재고 관리
//       status: { type: String, default: "active" },
//       isDeleted: { type: Boolean, default: false },
//     },
//     { timestamps: true }
//   );
