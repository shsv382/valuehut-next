import React from 'react';
import './about-page.module.scss';
import { useAppSelector } from '../../redux/hooks';

import Employee from '../../components/employee/employee.component';
import MainArticle from '../../components/main-article/main-article.component';
import PreviousClients from '../../components/previous-clients/previous-clients.component';

const AboutPage:React.FC = () => {
    const trainers = useAppSelector((state) => (state.content.pages.about.trainers));
    const { headerArticle } = useAppSelector((state) => (state.content.pages.home));
    return (
        <div className="page about-page">
            <MainArticle 
                { ...headerArticle }
            />

            <h1 className="about-page__trainers-header">Our People</h1>
            { trainers.map(trainer => <Employee {...trainer} />) }

            <PreviousClients />
        </div>
    )
}

export default AboutPage;