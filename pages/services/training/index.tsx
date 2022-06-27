import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { content } from '../../../data/content';
import Spinner from '../../../components/spinner/spinner.component';
import TrainingsPage from '../../../pages-components/trainings-page/trainings-page.component';

export function getStaticProps() {
    const introdution = content.pages.whatWeDo.introdution;
    return {
        props: { 
            introdution
        }
    }
}

const Trainings: NextPage = ({ introdution }: any) => {
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
            {
                loading ? 
                <Spinner /> : 
                <TrainingsPage url={"training"} trainings={trainings} introdution={content.pages.whatWeDo.introdution} />
            }
        </>
    )
}

export default Trainings
