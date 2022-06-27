import type { NextPage } from 'next'
import Head from 'next/head';
import { content } from '../../../data/content';
import { coaching } from '../../../data/coaching';
import ConsultingPage from '../../../pages-components/trainings-page/consulting-page';

export function getStaticProps() {
    const introdution = content.pages.whatWeDo.introdution;
    return {
        props: { 
            introdution
        }
    }
}

const Coaching: NextPage = ({ introdution }: any) => {
    return (
        <>
            <Head>
                <title>Valuehut</title>
                <meta name="description" content="Valuehut.co" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ConsultingPage url={"coaching"} consulting={coaching.coaching} introdution={content.pages.whatWeDo.introdution} />
        </>
    )
}

export default Coaching
