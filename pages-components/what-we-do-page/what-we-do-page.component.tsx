import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import './what-we-do-page.module.scss';
import Link from 'next/link';
import MainArticle from '../../components/main-article/main-article.component';

import { IntrodutionTypes } from '../../data/content';

// interface WhatWeDoTypes {
//     children?: any
// }

const WhatWeDoPage: React.FC = () => {
    const [service, setService] = useState("training");
    const [appearancable, setAppearancable] = useState(true);
    useEffect(() => setAppearancable(true), [service])
    const introdution: IntrodutionTypes = { ...useAppSelector(state => state.content.pages.whatWeDo.introdution) };
    return (
        <div className='what-we-do-page'>
            <nav className="services-navigation">
                {
                    Object.keys(introdution).map(s => (
                        <span 
                            key={`nav-${s}`} 
                            className={`link services-navigation-item ${(service === s) && `services-navigation-item-checked`}`} 
                            onClick={() => {
                                setAppearancable(false);
                                setTimeout(() => {
                                    setAppearancable(true);
                                    setService(s)
                                }, 5)
                                // setService(s)
                            }
                            }>
                            {s[0].toUpperCase() + s.slice(1).toLowerCase()}
                        </span>)
                    )
                }
            </nav>
            <div className={
                `what-we-do-page__content 
                ${appearancable ? "appearancable" : ""}`
            }>
                <MainArticle 
                    imageURL={ introdution[service].imageURL }
                    header={ introdution[service].header }
                    description={ introdution[service].description }
                >
                <Link to={service.toLowerCase()} className="button button-secondary button-secondary-default" style={{marginBottom: 30}}>
                    Read More
                </Link>
                </MainArticle>
            </div>
        </div>
    );
}

export default WhatWeDoPage;