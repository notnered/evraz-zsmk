'use client';
// REACT & REACT LIBS
import { FaAngleUp } from "react-icons/fa6";
import { useEffect, useState, useRef } from 'react';

export default function BackUpBtn(){
    const scrollThreshold = useRef(0);

    function headToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    const [scrolledBy, setScrolledBy] = useState(0);
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrolledBy(window.scrollY);
            if (scrolledBy >= scrollThreshold.current){
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        })
        const maxScroll = document.body.scrollHeight;
        scrollThreshold.current = (maxScroll * 0.5) / 2;
    }, [scrolledBy])

    return (
        <>
            {scrolledBy > scrollThreshold.current && showBtn ? (
                <button onClick={headToTop} className="back-btn bg-white opacity-100 transition-opacity duration-300 border-[1px] border-[--border-color] p-4 rounded-full fixed bottom-4 right-4 sm:right-8 md:right-12 sm:bottom-8 lg:right-16">
                    <FaAngleUp style={{fontSize: '1.375rem'}} />
                </button>
            ): (
                <button onClick={headToTop} className="opacity-0 transition-[opacity] border-[1px] border-[--border-color] p-4 rounded-full fixed bottom-4 right-4 sm:right-8 md:right-12 sm:bottom-8 lg:right-16 pointer-events-none">
                <FaAngleUp style={{fontSize: '1.375rem'}} />
            </button>
            )}
        </>
    )
}