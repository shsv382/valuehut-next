import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './services-page.module.scss';

import { Link, Outlet } from 'react-router-dom';

import WhatWeDoPage from '../what-we-do-page/what-we-do-page.component'
import MainArticle from '../../components/main-article/main-article.component';

import { TrainingTypes } from '../../data/training';
import { IntrodutionTypes } from '../../data/content';

interface ServicesTypes {
    children?: any
}

const ServicesPage: React.FC<ServicesTypes> = ({}) => {
    return (
        <div className='services-page'>
            <Outlet />
        </div>
    );
}

export default ServicesPage;