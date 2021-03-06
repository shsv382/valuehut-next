import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../header/header.component.tsx';
import Footer from '../footer/footer.component.tsx';
import BottomNav from '../bottom-nav/bottom-nav.component.tsx';
import { content } from '../../data/content';

export default function Layout({ children }) {
  const offices = content.pages.contact.offices;
  return (
    <div className="App">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/*<!-- TrustBox script -->*/}
        <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
        {/*<!-- End TrustBox script -->*/}
        <meta
          name="description"
          content="Agile trainings for better work"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#528ecc" />
        <meta name="description" content="ValueHut is an agile coaching and training consultancy that is helping Organisations to rethink their ways of working in other to help these organisations deliver most value to their customers." />
      </Head>
        <Header />
        <main>{children}</main>
        <BottomNav />
        <Footer offices={offices} />
        <div id="modal-root"></div>
        {/* <!-- FOXYCART --> */}
        <script data-cfasync="false" src="https://cdn.foxycart.com/valuehut/loader.js" async defer></script>
        {/* <!-- FOXYCART --> */}
    </div>
  );
}