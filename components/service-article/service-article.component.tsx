import React from "react";
import './service-article.module.scss';

interface ServiceArticleProps {
    title?: string,
    content: string,
    contentList?: string[],
    children?: any
}

const ServiceArticle: React.FC<ServiceArticleProps> = ({ title, content, contentList, children }) => {
    return (
        <section className="service__article">
            <article>
                {title && <h2 className="service__article__section__header">{ title }</h2>}
                <p>
                    { content }
                    { 
                        contentList && 
                        <ul className="main__article__description-list">
                            { contentList.map((d: string, i: number) => (<li key={`${title}-sa-li-${i}`}>{ d }</li>)) }
                        </ul>
                    }
                </p>
                { children }
            </article>
        </section>
    )
}

export default ServiceArticle;