import { content } from '../data/content';

export default function aboutPageProps() {
    return { 
        trainers: content.pages.about.trainers,
        headerArticle: content.pages.home.headerArticle,
        previousClients: content.pages.home.previousClients
    }
}