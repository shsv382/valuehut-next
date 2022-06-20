import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopWrapper = ({exclude, children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
        if (location.hash.indexOf(exclude) < 1) {
            try {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              } catch (_) {
                document.documentElement.scrollTo(0, 0);
              }
        }
    }, [location.pathname]);
    return children
} 

export default ScrollToTopWrapper;