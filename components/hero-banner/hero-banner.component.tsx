import React from "react";
import './hero-banner.module.scss';

interface HeroBannerTypes {
    imageURL: string,
    title: string,
    children?: any
}

const HeroBanner: React.FC<HeroBannerTypes> = ({ imageURL, title }) => {
    return (
        <>
            <div className="hero-banner-placeholder"></div>
            <div className="hero-banner" style={{backgroundImage: `url(${imageURL})`}}>
                <h1>{title}</h1>
            </div>
        </>
    )
}

export default HeroBanner;