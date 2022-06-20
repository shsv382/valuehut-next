import React from "react";
import './training-banner.module.scss';

interface TrainingBannerTypes {
    imageURL: string,
    title: string,
    logo?: string,
    children?: any
}

const TrainingBanner: React.FC<TrainingBannerTypes> = ({ imageURL, title, logo }) => {
    return (
        <>
            <div className="training-banner-placeholder"></div>
            <div className="training-banner" style={{backgroundImage: `url(${imageURL})`}}>
                <h1>
                    {
                        logo &&
                        <img className="training-banner__logo" src={logo} alt={title} />
                    }
                    <span>
                        {title}
                    </span>
                </h1>
            </div>
        </>
    )
}

export default TrainingBanner;