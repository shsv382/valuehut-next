import React from "react";
import taStyles from './training-article.module.scss';

interface TrainingArticleProps {
    title?: string,
    content?: string,
    contentList?: string[],
    children?: any
}

const TrainingArticle: React.FC<TrainingArticleProps> = ({ title, content, contentList, children }) => {
    return (
        <section className={`${taStyles.training__article}`}>
            <article>
                {title && <h2 className={`${taStyles.training__article__section__header}`}>{ title }</h2>}
                <div>
                    { content }
                    { 
                        contentList && 
                        <ul className={`${taStyles.main__article__descriptionList}`}>
                            { contentList.map((d: string, i: number) => (<li key={`${title}-ta-li-${i}`}>{ d }</li>)) }
                        </ul>
                    }
                </div>
                { children }
            </article>
        </section>
    )
}

export default TrainingArticle;