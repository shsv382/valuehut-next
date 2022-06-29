import React from "react";
import tbStyles from './training-banner.module.scss';
import Image from 'next/image';

interface TrainingBannerTypes {
    imageURL: string,
    title: string,
    logo?: string,
    children?: any
}

const TrainingBanner: React.FC<TrainingBannerTypes> = ({ imageURL, title, logo }) => {
    return (
        <>
            <div className={`${tbStyles.trainingBannerPlaceholder}`}></div>
            <div className={`${tbStyles.trainingBanner}`} style={{backgroundImage: `url(${imageURL})`}}>
                <h1>
                    {
                        logo &&
                        <div className={`${tbStyles.trainingBanner__logo}`}>
                            <Image src={logo} alt={title} width='85' height='85' />
                        </div>
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