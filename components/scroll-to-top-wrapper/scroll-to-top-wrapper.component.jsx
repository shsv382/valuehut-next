import React, { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollToTopWrapper = ({exclude, children}) => {
    const location = useRouter().pathname;
    useLayoutEffect(() => {
        if (location.indexOf(exclude) < 1) {
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
    }, [location]);
    return children
} 

export default ScrollToTopWrapper;