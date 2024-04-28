import React, { useEffect } from 'react'
import './ScrollToTop.css';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
