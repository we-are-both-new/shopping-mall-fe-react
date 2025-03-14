import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setFilterItem, setResult } from "../redux/itemsSlice";
import { useDispatch } from "react-redux";

const Search = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const [isOpen, setIsOpen] = useState(true);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [inputWidth, setInputWidth] = useState(0);
    const [inputText, setInputText] = useState("");

    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.items.items);

    const toggleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);

        if (text.trim() === "") {
            dispatch(setFilterItem(items));
        }
    };
    const itemSearch = () => {
        const filterItem = items.filter((item) => item.goods.toLowerCase().includes(inputText.toLowerCase()));

        dispatch(setFilterItem(filterItem));
        dispatch(setResult(filterItem.length === 0));
    };

    const handleScroll = useCallback(() => {
        if (window.scrollY > 0 && !hasScrolled) {
            if (inputText.length > 0) {
                return setHasScrolled(true);
            }
            setIsOpen(false);
            setHasScrolled(true);
        }
    }, [inputText, hasScrolled]);

    useEffect(() => {
        const updateInputWidth = () => {
            if (inputRef.current && btnRef.current) {
                setInputWidth(inputRef.current.offsetWidth + btnRef.current.offsetWidth * 2 + 10);
            }
        };
        updateInputWidth();

        window.addEventListener("resize", updateInputWidth);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", updateInputWidth);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll, inputText]);

    return (
        <>
            <div className="flex fixed left-auto z-50 top-45 lg:top-60 right-0 xl:right-[calc(50%-595px)] 2xl:right-[calc(50%-724px)] items-center overflow-hidden">
                <motion.input
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            itemSearch();
                        }
                    }}
                    ref={inputRef}
                    variants={InputVariants(isOpen, inputWidth)}
                    initial="inital"
                    animate="animate"
                    className="w-40 sm:w-full border-b p-2 focus:outline-none "
                    placeholder="제품 검색"
                />
                <button ref={btnRef} onClick={inputText ? itemSearch : toggleClick} className=" flex items-center p-2 cursor-pointer">
                    {inputText || !isOpen ? <FaSearch size={20} /> : <IoCloseSharp size={20} />}
                </button>
            </div>
        </>
    );
};

const InputVariants = (isOpen: boolean, inputWidth: number) => ({
    initial: {
        x: 0,
    },
    animate: {
        x: isOpen ? 0 : inputWidth,
    },
    transition: { duration: 0.5 },
});

export default Search;
