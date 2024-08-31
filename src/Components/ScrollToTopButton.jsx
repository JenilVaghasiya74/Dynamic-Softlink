// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import { IoIosArrowDropup } from "react-icons/io";


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 350) { // Show button if scrolled more than 300px  
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };  
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <button className="scroll-to-top" onClick={scrollToTop}>
                <IoIosArrowDropup />
            </button>
        )
    );
};

export default ScrollToTopButton;
