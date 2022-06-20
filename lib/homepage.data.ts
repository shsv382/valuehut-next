import { content, IntrodutionTypes, HomepageTypes } from '../data/content';

const { widescreenBanner, 
    headerArticle, 
    servicesArticle, 
    whatCustomersWant, } = { ...content.pages.home };

export default function homepageProps(): HomepageTypes {
    return { 
        widescreenBanner, 
        headerArticle, 
        servicesArticle, 
        whatCustomersWant, 
        whatWeDo: content.pages.whatWeDo.introdution 
    }
}