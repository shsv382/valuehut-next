import React from "react";
import './training-article.module.scss';

interface TrainingArticleProps {
    title?: string,
    content?: string,
    contentList?: string[],
    children?: any
}

const TrainingArticle: React.FC<TrainingArticleProps> = ({ title, content, contentList, children }) => {
    return (
        <section className="training__article">
            <article>
                {title && <h2 className="training__article__section__header">{ title }</h2>}
                <p>
                    { content }
                    { 
                        contentList && 
                        <ul className="main__article__description-list">
                            { contentList.map((d: string, i: number) => (<li key={`${title}-ta-li-${i}`}>{ d }</li>)) }
                        </ul>
                    }
                </p>
                { children }
            </article>
        </section>
    )
}

export default TrainingArticle;