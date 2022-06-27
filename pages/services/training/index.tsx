import type { NextPage } from 'next'
import Head from 'next/head';
import { content } from '../../../data/content';
import { training } from '../../../data/training';
import TrainingsPage from '../../../pages-components/trainings-page/trainings-page.component';

export function getStaticProps() {
    const introdution = content.pages.whatWeDo.introdution;
    return {
        props: { 
            introdution
        }
    }
}

const Services: NextPage = ({ introdution }: any) => {
    return (
        <>
            <Head>
                <title>Valuehut</title>
                <meta name="description" content="Valuehut.co" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TrainingsPage url={"training"} trainings={training.training} introdution={content.pages.whatWeDo.introdution} />
        </>
    )
}

export default Services
