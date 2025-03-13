import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Search = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const [isOpen, setIsOpen] = useState(true);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [inputWidth, setInputWidth] = useState(0);
    const [inputText, setInputText] = useState("");

    const toggleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value); //
    };

    const itemSearch = () => {
        console.log("검색시");
    };

    const handleScroll = () => {
        if (window.scrollY > 0 && !hasScrolled) {
            setIsOpen(false);
            setHasScrolled(true);
        }
    };

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
    }, [hasScrolled]);

    return (
        <div className="flex fixed left-auto z-50 right-0 top-45 lg:top-60 lg:right-11 xl:right-23 items-center overflow-hidden">
            <motion.input onChange={handleChange} ref={inputRef} variants={InputVariants(isOpen, inputWidth)} initial="inital" animate="animate" className="w-40 sm:w-full border-b p-2 focus:outline-none " placeholder="제품 검색" />
            <button ref={btnRef} onClick={inputText ? itemSearch : toggleClick} className=" flex items-center p-2 cursor-pointer">
                {inputText || !isOpen ? <FaSearch size={20} /> : <IoCloseSharp size={20} />}
            </button>
        </div>
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
