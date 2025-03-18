import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface OptionType {
    value: string;
    label: string;
}

const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const items = useSelector((state: RootState) => state.items.items);

    const selectedItem = items.find((item) => item._id === id);

    const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
    // customStyles 정의
    const customStyles: StylesConfig<OptionType, false> = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#f0f0f0",
            borderColor: state.isFocused ? "rgba(204,7,30,.5)" : "#ccc",
            borderRadius: "8px",
            padding: "5px",
            boxShadow: state.isFocused ? "none" : "none",
            "&:hover": {
                borderColor: "rgba(204,7,30,.5)",
                boxShadow: "0 0 0 1px rgba(204,7,30,.5)",
            },
        }),
        option: (provided, state) => ({
            ...provided,
            padding: "10px",
            backgroundColor: state.isSelected ? "rgba(204,7,30,.5)" : "white",
            color: state.isSelected ? "white" : "black",

            "&:hover": {
                color: "#fff",
                backgroundColor: "rgba(204,7,30,.5)",
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "#333",
        }),
    };

    useEffect(() => {
        if (selectedItem) {
            const uniqueSizes = Array.from(new Set(selectedItem.size));
            const sizeOptions = uniqueSizes.map((size) => ({
                value: size,
                label: size,
            }));
            setOptions(sizeOptions);
        }
    }, [selectedItem]);

    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(null);

    const handleChange = (selected: { value: string; label: string } | null) => {
        setSelectedOption(selected);
    };
    return (
        <section>
            <div className="w-full ml-auto mr-auto xl:container">
                <div className="row">
                    <div className="w-full block sm:flex sm:justify-center pt-10 pb-10">
                        <div className="w-full sm:w-1/2">
                            <Swiper
                                effect="fade"
                                modules={[EffectFade, Pagination, Navigation, Autoplay]} // Autoplay 추가
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                fadeEffect={{ crossFade: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                className="mySwiper w-[80%]"
                            >
                                {Array.isArray(selectedItem?.detailImages) ? (
                                    selectedItem.detailImages.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={image} alt={selectedItem?.name} />
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <SwiperSlide>
                                        <img src={selectedItem?.detailImages} alt={selectedItem?.name} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                        <div className="w-full sm:w-1/2 pt-5 pb-5 pr- xl:pt-20 xl:pb-20">
                            <div className="ml-auto mr-auto w-[80%] flex flex-col justify-center h-full">
                                <h2 className="font-bold text-2xl xl:text-4xl mb-5">{selectedItem?.name}</h2>
                                <p className="font-500 mb-5">₩ {selectedItem?.price}</p>
                                <h2 className="mb-10 sm:mb-auto">{selectedItem?.description}</h2>
                                <Select className="w-full xl:w-1/2 mb-10 shadow-none" options={options} value={selectedOption} styles={customStyles} isMulti={false} placeholder="Select size" onChange={handleChange} />
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
