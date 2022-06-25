import React, { useState, useEffect } from 'react';
import './what-we-do-page.module.scss';
import Link from 'next/link';
import MainArticle from '../../components/main-article/main-article.component';

import { WhatWeDoTypes, IntrodutionTypes } from '../../data/content';

// interface WhatWeDoTypes {
//     children?: any
// }

const WhatWeDoPage: React.FC<WhatWeDoTypes> = ({ introdution }) => {
    const [service, setService] = useState("training");
    const [appearancable, setAppearancable] = useState(true);
    useEffect(() => setAppearancable(true), [service])
    return (
        <div className='what-we-do-page'>
            <nav className="services-navigation">
                {
                    introdution.map(s => (
                        <span 
                            key={`nav-${s.header}`} 
                            className={`link services-navigation-item ${(service.toLowerCase() === s.header.toLowerCase()) && `services-navigation-item-checked`}`} 
                            onClick={() => {
                                setAppearancable(false);
                                setTimeout(() => {
                                    setAppearancable(true);
                                    setService(s.header.toLowerCase())
                                }, 5)
                                // setService(s)
                            }
                            }>
                            {s.header[0].toUpperCase() + s.header.slice(1).toLowerCase()}
                        </span>)
                    )
                }
            </nav>
            <div className={
                `what-we-do-page__content 
                ${appearancable ? "appearancable" : ""}`
            }>
                <MainArticle 
                    imageURL={ introdution.filter(item => item.header.toLowerCase() === service)[0].imageURL }
                    header={ introdution.filter(item => item.header.toLowerCase() === service)[0].header }
                    description={ introdution.filter(item => item.header.toLowerCase() === service)[0].description }
                >
                <Link href={service.toLowerCase()}>
                    <a className="button button-secondary button-secondary-default" style={{marginBottom: 30}}>
                        Read More
                    </a>
                </Link>
                </MainArticle>
            </div>
        </div>
    );
}

export default WhatWeDoPage;