import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Head from 'next/head'
import { content, ContactDataTypes } from '../data/content';
import ContactPage, { ContactProps } from '../pages-components/contact-page/contact-page.component';

export function getStaticProps() {
    const { howto } = content.pages.contact
    return {
        props: { 
            howto
        }
    }
}

const Contact: NextPage<ContactProps> = ({ howto }) => {
    const [ offices, setOffices ] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/offices");
            const data = await response.json();
            setOffices(data.offices)
        };
        fetchData();
    }, [])
    return (
        <>
            <Head>
                <title>Contact us - Valuehut</title>
                <meta name="description" content="Valuehut.co" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContactPage howto={howto} offices={offices} />
        </>
    )
}

export default Contact
