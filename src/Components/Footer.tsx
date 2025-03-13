import { useState } from "react";

const Footer = () => {
    const [year] = useState(new Date().getFullYear());
    return (
        <footer className="flex items-center justify-center pt-6 pb-6 border-t-1">
            <p>© {year} ahramKim & daseulJeong All rights reserved. </p>
        </footer>
    );
};

export default Footer;
