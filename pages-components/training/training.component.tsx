import React from 'react';
import './training.module.scss';
import { TrainingTypes } from '../../data/training';
import TrainingArticle from '../../components/training-article/training-article.component';
import { useAppDispatch } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cart.actions';
import Link from 'next/link';

import DatesTable from '../../components/dates-table/dates-table.component';
import TrainingBanner from '../../components/training-banner/training-banner.component';

interface TrainingComponentTypes {
    training: TrainingTypes,
    children?: any
}

const Training: React.FC<TrainingComponentTypes> = ({ training }) => {
    const { title, description, articles, streams, imageURL, logo } = { ...training };
    return (
        <div className='page training-page'>
            <TrainingBanner
                title={title}
                logo={`/training/${logo}`}
                imageURL={`/images/${imageURL}`}
            />
            <div className="training-page__placeholder"></div>
            {    description &&
                <TrainingArticle 
                    title="About this Course"
                    content={ description }
                />
            }
            {   articles && articles.map((article, i) => (
                    <TrainingArticle key={article.content[0] + i + article.content[0]}
                        { ...article }
                    />
                ))
            }
            <div id="book-now">
                {
                    streams &&
                    <DatesTable
                    streams={ streams }
                    training={ training }
                    />
                }
            </div>
        </div>
    )
}

export default Training;