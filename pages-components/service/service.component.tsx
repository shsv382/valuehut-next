import React from 'react';
import './service.module.scss';
import { CoachingTypes } from '../../data/coaching';
import { ConsultancyTypes } from '../../data/consultancy';
import ServiceArticle from '../../components/service-article/service-article.component';
import HeroBanner from '../../components/hero-banner/hero-banner.component';

import Link from 'next/link';

interface ServiceTypes {
    service: CoachingTypes | ConsultancyTypes,
    children?: any
}

const Service: React.FC<ServiceTypes> = ({ service }) => {
    const { title, description, articles, imageURL } = { ...service };
    return (
        <div className='page service-page'>
            <HeroBanner
                title={title}
                imageURL={`/images/${imageURL}`}
            />
            <div className="service-page__placeholder"></div>
            {    description &&
                <ServiceArticle 
                    title={ title }
                    content={ description }
                />
            }
            {   articles && articles.map((article, i) => (
                    <ServiceArticle key={article.content[0] + i + article.content[0]}
                        { ...article }
                    />
                ))
            }
            <ServiceArticle 
                title="For more details:"
                content=""
            >
                <Link 
                    className="button button-primary button-primary-large"
                    to="/contact">
                        Contact us
                </Link>
            </ServiceArticle>
        </div>
    )
}

export default Service;