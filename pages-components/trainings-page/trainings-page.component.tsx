import React, { lazy, Suspense } from 'react';
import { useAppSelector } from '../../redux/hooks';
import './trainings-page.module.scss';

import MainArticle from '../../components/main-article/main-article.component';
import Spinner from '../../components/spinner/spinner.component';

import { TrainingTypes } from '../../data/training';
import { IntrodutionTypes } from '../../data/content';
import TrustBox from '../../components/trustbox/trustbox.component';

interface TrainingsPageTypes {
    url: string,
    trainings: TrainingTypes[],
    children?: any
}

const TrainingsPage: React.FC<TrainingsPageTypes> = ({ url, trainings }) => {
    const introdution: IntrodutionTypes = { ...useAppSelector(state => state.content.pages.whatWeDo.introdution) };
    const introdutionArticle = introdution[url];
    return (
        <div className='page trainings-page'>
            <MainArticle 
                { ...introdutionArticle }
            />
            <Suspense fallback={<Spinner />}>
            {
                trainings.map((training:TrainingTypes, i:number) => {
                    return (
                        <MainArticle 
                            imageURL={training.imageURL}
                            header={training.title}
                            description={training.description}
                            streams={training.streams}
                            isTraining={training.isTraining}
                            logo={training.logo}
                            key={`training-${training.id}`}
                        />
                    )
                }
            )}
            </Suspense>
            {
                url === "training" &&
                <TrustBox />
            }
        </div>
    );
}

export default TrainingsPage;