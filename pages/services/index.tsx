import type { NextPage } from 'next'
import Head from 'next/head'
import WhatWeDoPage from '../../pages-components/what-we-do-page/what-we-do-page.component'
import { content } from '../../data/content';
import { useEffect } from 'react';

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
            <WhatWeDoPage introdution={introdution} />
        </>
    )
}

export default Services
