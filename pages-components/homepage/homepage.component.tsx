import React from 'react';
import homepageStyles from './homepage.module.scss';
import { HomepageTypes } from '../../data/content';

import WidescreenBanner from '../../components/widescreen-banner/widescreen-banner.component';
import MainArticle from '../../components/main-article/main-article.component';
import HeaderWithButton from '../../components/header-with-button/header-with-button.component';
import TripleBox from '../../components/triple-box/triple-box.component';
import ServiceBox from '../../components/service-box/service-box.component';
import PreviousClients from '../../components/previous-clients/previous-clients.component';

const Homepage: React.FC<HomepageTypes> = ({ widescreenBanner, headerArticle, servicesArticle, whatCustomersWant, whatWeDo, previousClients, services }) => {
    const articleTextAlign = { 
        textAlign: "left",
    }
    return (
        <>
        <WidescreenBanner slogan={widescreenBanner.slogan} />
        <div className={`page ${homepageStyles.homepage}`}>
            <MainArticle 
                imageURL={headerArticle.imageURL}
                header={headerArticle.header}
                description={headerArticle.description}
                style={articleTextAlign}
                />
            <MainArticle 
                imageURL={whatCustomersWant.imageURL}
                header={whatCustomersWant.header}
                descriptionList={whatCustomersWant.descriptionList}
                style={articleTextAlign}
            />
            <MainArticle 
                imageURL={whatWeDo.imageURL}
                header={whatWeDo.header}
                description={whatWeDo.description}
                style={articleTextAlign}
            />
            <HeaderWithButton
                header={servicesArticle.header}
                link="View all"
                href="services"    
            />
            <TripleBox>
                {
                    services.map((service:any, i:number) => {
                        return i < 3 && (
                            <ServiceBox {...service} url={`/services/${service.header.toLowerCase()}`} key={`service-${service.header}`} />
                        )
                    })
                }
            </TripleBox>
            <PreviousClients previousClients={previousClients} />
        </div>
        </>
    )
};

export default Homepage;