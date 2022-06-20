import React from "react";
import { BannerImage } from "./banner-image";
import { BannerShadow } from "./banner-shadow";

const WidescreenBanner = ({slogan}) => {
    return (
        <BannerImage>
            <BannerShadow>
                {/* <img src="logo/logo-transparent.png" /> */}
                <div className="widescreen__slogan">
                {
                    slogan.map((string, i) => 
                    (<span className="widescreen__slogan__string" key={`banner-string-${i}`}>{string}</span>)
                )}
                </div>
            </BannerShadow>
        </BannerImage>
    )
}

export default WidescreenBanner;
// import styled from 'styled-components';

// export const WidescreenBanner = styled.div`
//     background-image: url("./images/landscape-wide.jpg");
//     background-size: cover;
//     background-position: center center;
//     width: 100%;
//     position: static;
//     height: 600px;
//     @media screen and (min-width: 1023px) {
//         background-image: url("./images/landscape-wide.jpg");
//         height: 600px;
//     }
//     @media screen and (max-width: 1023px) {
//         background-image: url("./images/landscape-wide-sm.jpg");
//         height: 500px;
//         background-position: right center;
//     }
//     @media screen and (max-width: 767px) {
//         height: 400px;
//     }
//     @media screen and (max-width: 479px) {
//         height: 300px;
//     }
// `