import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1280);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <div className="sticky top-0 z-60 border-b">
            <header className="relative h-25 sm:h-30 bg-white">
                <nav className="h-full">
                    <div className="content-container flex items-center justify-between w-full h-full pl-5 pr-5 sm:pr-10 sm:pl-10 xl:pr-20 xl:pl-20">
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <Link to={"/"}>
                                <Svg whileInView="visible" viewport={{ once: true }} focusable="false" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="4250 350 1000 1000" width="100%" height="120" variants={svgVariants} initial="hidden" animate="visible">
                                    <g fill="#CC071E">
                                        <motion.path
                                            d="M4895.119,591.292c25.74-12.642,38.496-10.983,38.783,1.831 c0.344,16.646-2.117,38.782-3.891,54.799c-9.553,87.055-25.512,158.191-26.713,247.574 c42.043-108.843,77.279-184.492,122.697-277.662c14.416-29.688,23.625-24.139,35.465-29.402 c46.105-20.535,47.822-7.951,41.814,17.161c-22.365,93.01-79.625,385.858-88.375,430.951c-2.518,13.047-16.703,7.516-20.365,2.414 c-16.416-22.709-34.949-23.064-32.891-38.165c10.297-75.181,47.363-263.808,57.031-308.254 c-49.252,100.972-100.332,227.199-126.588,298.77c-5.549,15.198-15.674,14.083-21.965,2.963 c-8.867-15.621-26.084-23.596-28.945-42.055c-8.98-58.688,10.297-170.552,12.984-241.322 c-26.826,77.308-71.844,227.399-91.579,295.211c-8.122,28.058-35.236,23.481-28.029-3.866 c29.973-113.803,94.555-315.078,122.469-387.438C4863.602,597.755,4880.818,598.327,4895.119,591.292"
                                            variants={pathVariants}
                                            initial="hidden"
                                            animate="visible"
                                            stroke="#CC071E"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        <motion.path
                                            d="M4731.637,577.334c-8.694-2.116-33.92,11.498-49.422,14.186 c-4.919,0.858-9.61,6.063-11.269,9.782c-24.826,57.03-47.077,111.394-66.354,160.919c-24.654,4.21-53.483,9.753-85.745,17 c23.109-59.278,46.448-117.744,69.214-173.973c11.211-27.686-18.304-30.317-29.745-2.288 c-14.873,36.438-42.73,104.708-73.562,184.281c-22.652,5.554-46.676,11.903-71.788,19.157 c-18.248,5.268-18.991,10.13-11.097,21.073c4.347,6.093,13.328,5.479,17.446,9.821c10.64,11.252,17.104,24.711,36.151,26.748 c-16.989,45.446-33.978,92.312-49.365,137.438c-9.667,28.326,17.847,34.12,28.43,4.146c17.046-48.318,35.007-97.22,53.483-145.978 c15.387-3.576,52.625-11.596,87.003-19.055c-27.285,74.785-45.247,131.581-52.053,159.227c-1.258,5.319,0.858,8.271,2.002,10.439 c9.209,13.402,17.961,13.951,29.802,30.522c3.204,4.519,13.958,6.956,17.618-4.17c25.283-76.37,51.31-148.026,75.563-212.264 c10.067-2.202,28.2-6.578,39.297-23.138c19.734-29.391,25.397-23.43,30.146-32.365c5.949-11.217,2.001-21.748-19.048-19.146 c0,0-7.951,0.566-22.652,2.242c23.338-60.09,43.759-111.057,58.46-149.896C4739.188,588.889,4739.817,579.279,4731.637,577.334"
                                            variants={pathVariants}
                                            initial="hidden"
                                            animate="visible"
                                            stroke="#CC071E"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <motion.path
                                            d="M4697.202,967.071c5.434,13.734,22.423,9.575,15.959-7.001 c-6.579-16.887-22.938-67.722-27.229-84.099c-5.834-22.068,19.449-16.033,6.636-1.606c-10.982,12.406-18.305,17.377-38.611,40.967 c-19.62,22.772-14.3,52.323,6.693,58.85c23.681,7.367,44.56-18.728,57.487-37.873c12.527-18.539,0.4-29.413-12.241-18.453 c-8.123,7.047-17.504,17.869-27,23.704c-7.722,4.696-13.786-0.349-3.489-14.523c11.955-16.411,25.34-30.162,35.293-45.67 c20.307-31.604-19.849-49.822-37.124-29.293c-9.267,10.943-6.921,21.686-4.404,30.906 C4673.234,897.749,4688.335,944.895,4697.202,967.071"
                                            variants={pathVariants}
                                            initial="hidden"
                                            animate="visible"
                                            stroke="#CC071E"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </Svg>
                            </Link>
                        </div>

                        {isMobile ? (
                            <div className="xl:hidden flex items-center flex-1  justify-end">
                                {/* mo메뉴 */}
                                <button onClick={openMenu} className="text-gray-800">
                                    <FaBars size={20} />
                                </button>
                            </div>
                        ) : (
                            <div className="hidden xl:flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
                                {/* pc메뉴 */}
                                <div className="flex items-center justify-center gap-x-6 h-full">
                                    <Menu />
                                </div>
                            </div>
                        )}
                    </div>

                    {isMobile && (
                        <AnimatePresence>
                            {/* mo 메뉴 팝업 */}
                            {isMenuOpen && (
                                <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="xl:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
                                    <div className="flex justify-end">
                                        <button onClick={closeMenu} className="text-white absolute right-5 sm:right-10 xl:right-20 top-10">
                                            <FaTimes size={30} />
                                        </button>
                                    </div>
                                    <MoMenu className="text-white h-full flex flex-col items-center justify-center text-3xl font-bold">
                                        <Menu setIsMenuOpen={setIsMenuOpen} />
                                    </MoMenu>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}
                </nav>
            </header>
        </div>
    );
};

const Svg = styled(motion.svg)`
    color: "rgba(204, 7, 30, 1)";

    path {
        stroke-width: 3;
        stroke: "rgba(204, 7, 30, 1)";
    }
`;

const svgVariants = {
    hidden: { color: "rgba(204, 7, 30, 0)" },
    visible: { color: "rgba(204, 7, 30, 1)", transition: { duration: 0.5 } },
};

const pathVariants = {
    hidden: {
        pathLength: 0,
        fill: "rgba(204, 7, 30, 0)",
    },
    visible: {
        pathLength: 1,
        fill: "rgba(204, 7, 30, 1)",
        transition: {
            pathLength: { duration: 2, ease: "easeInOut" },
            fill: { delay: 1.5, duration: 1, ease: "easeInOut" },
        },
    },
};

const MoMenu = styled.div`
    a {
        + a {
            margin-top: 10%;
        }
    }
`;

const menuVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
};

export default Header;
