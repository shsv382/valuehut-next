import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Homepage from '../pages-components/homepage/homepage.component'
import homepageProps from '../lib/homepage.data'
import { HomepageTypes } from '../data/content';
import Layout from '../components/layout/layout.component.jsx'

export function getStaticProps() {
  const homeProps = homepageProps();
  return {
    props: { 
      homeProps
    }
  }
}

interface HomeTypes {
  homeProps: HomepageTypes
}

const Home: NextPage<HomeTypes> = ({ homeProps }) => {
  return (
    <Layout>
      <Head>
        <title>Valuehut</title>
        <meta name="description" content="Valuehut.co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage {...homeProps} />
    </Layout>
  )
}

export default Home
