import type { NextPage } from 'next'
import Head from 'next/head';
import { content } from '../../../data/content';
import { consulting } from '../../../data/consulting';
import ConsultingPage from '../../../pages-components/trainings-page/consulting-page';

export function getStaticProps() {
    const introdution = content.pages.whatWeDo.introdution;
    return {
        props: { 
            introdution
        }
    }
}

const Trainings: NextPage = ({ introdution }: any) => {
    return (
        <>
            <Head>
                <title>Valuehut</title>
                <meta name="description" content="Valuehut.co" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ConsultingPage url={"consulting"} consulting={consulting.consulting} introdution={content.pages.whatWeDo.introdution} />
        </>
    )
}

export default Trainings
