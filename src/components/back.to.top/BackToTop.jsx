import React, { useState, useEffect } from "react";
import '../back.to.top/backToTop.css';
import '../../style/reset.css';


export function BackToTop() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 200;
            setShowBackToTop(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    };

    return (
        <>
            {showBackToTop && (
                <div id="back-to-top" onClick={scrollToTop}>
                    <i className="fa fa-angle-up" title="Back to top"></i>
                </div>
            )}
        </>
    )

}