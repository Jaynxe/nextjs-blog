"use client";
import { useState, useEffect } from 'react';

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // 处理滚动事件
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // 清除事件监听器
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 回到顶部的函数
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full transition-opacity duration-300 shadow-md focus:outline-none ${isVisible
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
                }
      bg-gray-50 hover:bg-gray-100 text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
            aria-label="Back to Top"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
}
