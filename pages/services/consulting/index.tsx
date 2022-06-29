import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { content } from '../../../data/content';
import ConsultingPage from '../../../pages-components/trainings-page/consulting-page';
import Spinner from '../../../components/spinner/spinner.component';

export function getStaticProps() {
    const introdution = content.pages.whatWeDo.introdution;
    return {
        props: { 
            introdution
        }
    }
}

const Consulting: NextPage = ({ introdution }: any) => {
    const [consulting, setConsulting] = useState({
        title: " ",
        imageURL: " ",
        articles: [{
            content: " ",
        }]
    });
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/consulting");
            const data = await response.json();
            setConsulting(data.consulting)
            setLoading(false)
        };
        setLoading(true)
        fetchData();
    }, [])
    return (
        <>
            <Head>
                <title>Consulting - Valuehut</title>
                <meta name="description" content="Valuehut.co" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                loading ? 
                <Spinner /> :
                <ConsultingPage url={"consulting"} consulting={consulting} introdution={content.pages.whatWeDo.introdution} />
            }
        </>
    )
}

export default Consulting
