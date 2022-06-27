import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
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
    const [trainings, setTrainings] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/trainings");
            const data = await response.json();
            setTrainings(data.trainings)
            setLoading(false)
        };
        setLoading(true)
        fetchData();
    }, [])
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
